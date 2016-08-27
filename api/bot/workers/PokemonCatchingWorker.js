import TickWorker from './TickWorker';
import logUtils from '../utils/logUtils';
import InventoryPruner from '../utils/InventoryPruner';
import async from 'async';
import Promise from 'bluebird';
import Pokemon from "../models/Pokemon";
import env from '../../../env';

// Wait time after encountering the pokemon before you can catch them
const pauseDurationBeforeCatching = 7000;
const xpForNewPokemon = 500;

export default class PokemonCatchingWorker extends TickWorker {
  constructor({state, client, stats, bot}) {
    super({state, client, stats, bot});
    this._pausedTimeMs = 5000;
  }

  getConfig() {
    return {
      actEvery: 5 * 1000,
    };
  }

  act() {
    const {state} = this;
    const encounters = state.mapSummary.encounters;
    // console.log(`There are ${encounters.length} pokemon that I could catch`);
    if (encounters.length === 0) return;

    const ballItems = InventoryPruner.getItemsByType('ball', state.inventory.items);
    if (!Object.keys(ballItems).length) return console.log('Out of pokeballs! Skipping catching.'.yellow);
    if (state.softBanned) return console.log('Skipping catching, you are soft-banned :('.red);

    const pokemonPackFull = state.inventory.pokemonSummary.count >= state.inventory.maxPokemonCount;
    if (pokemonPackFull) return console.log('Skipping catching, you have no room for new pokemon!'.yellow);

    this.bot.pauseUntil(new Promise(resolve => {
      async.eachSeries(encounters, (encounter, cb) => {
        return this.encounterPokemon(encounter).then(cb, cb);
      }, resolve);
    }));
  }

  encounterPokemon(encounter) {
    const {client, state} = this;
    const {encounterID, spawnPointID} = encounter;

    const data = {};
    state.mapSummary.encounters = state.mapSummary.encounters.filter(p => p !== encounter);

    if ((new Date(encounter.expirationTimestampMs)).getTime() < Date.now()) {
      console.log('Skipping encounter, the pokemon has expired!'.toString().yellow);
      return Promise.resolve();
    }

    return client.encounter(encounterID, spawnPointID)
      .then(encounterResponse => {
        // console.log(`encounterResponse`);
        // console.log(JSON.stringify(encounterResponse));
        state.encounter = {
          encounter,
          encounterResponse
        };

        if (encounterResponse.status !== 1) {
          console.log(`Failed to encounter the Pokemon :(`.toString().red);
          return Promise.reject();
        }

        const {capture_probability} = encounterResponse;
        const probabilities = capture_probability.capture_probability;
        const wildPokemon = encounterResponse.wild_pokemon;
        const remotePokemon = wildPokemon.pokemon_data;
        data.pokemon = Pokemon.fromRemotePokemon(remotePokemon);

        state.encounter.pokemon = data.pokemon;
        state.encounter.probabilities = probabilities;
        data.encounterResponse = encounterResponse;
        console.log(`Catching ${logUtils.getPokemonNameString(data.pokemon)}...`);
        console.log(`Chance of catching: ${probabilities.map(p => (p * 100).toFixed(0)).join('%, ')}%`);
        // console.log(['probabilities',probabilities]);

        return this.useBerry(state.encounter);
      })
      .then(() => {
        return this.catchPokemon(encounter, data.encounterResponse, data.pokemon);
      })
      .then(Promise.delay.bind(this, 1500));
  }

  useBerry(encounterData) {
    const {client, state} = this;
    const {encounter, probabilities} = encounterData;
    const {encounterID, spawnPointID} = encounter;
    const berryItems = InventoryPruner.getItemsByType('berry', state.inventory.items);
    if (probabilities[0] >= .85) {
      console.log('Skipping using berry, catch chance already high.');
      return Promise.resolve();
    } else if (berryItems.length === 0) {
      console.log('Skipping using berry, none available');
      return Promise.resolve();
    }
    const itemID = berryItems[0].id;
    console.log('Using Razz Berry');
    state.inventory.deltaItem(itemID, -1);

    return client.useItemCapture(itemID, encounterID, spawnPointID)
      .then(({success, item_capture_mult}) => {
        if (success) {
          console.log(`Used Razz Berry`.toString().green);
          console.log(`Chance of catching: ${probabilities.map(p => (p * 100 * item_capture_mult).toFixed(0)).join('%, ')}%`);
        } else console.log('Failed to use Razz Berry'.red);
        return Promise.resolve();
      });
  }

  catchPokemon(encounter, encounterResponse, pokemon) {
    const {client, state} = this;
    const {encounterID, spawnPointID} = encounter;
    const catchingState = {
      xpEarned: 0,
    };

    return new Promise(resolve => {
      var catchReponse = null;
      async.doWhilst((cb) => {
        Promise.delay(pauseDurationBeforeCatching)
          .then(() => {
            const {
              pokeballItem,
              normalizedReticleSize,
              hitPokemon,
              spinModifier,
              normalizedHitPosition,
            } = this.getCatchOptions(state.encounter);
            if (!pokeballItem) {
              console.log('Out of pokeballs! Skipping catching.'.red);
              return Promise.resolve();
            }
            state.inventory.deltaItem(pokeballItem.id, -1);
            return client.catchPokemon(
              encounterID,
              pokeballItem.id,
              normalizedReticleSize,
              spawnPointID,
              hitPokemon,
              spinModifier,
              normalizedHitPosition
            ).timeout(20000);
          })
          .then((response) => {
             //console.log(`Got a catch response`);
             //console.log(response);
            catchReponse = response;
            cb(null);
            return null;
          })
          .catch(Promise.TimeoutError, (e) => {
            console.log('Catching the pokemon timed out', e);
            catchReponse = null;
            cb(null);
            return null;
          });
      }, () => {
        const {status, capture_award} = catchReponse || {};
        if (catchReponse === null) {
          return true;
        } else if (status === 0) {
          console.log(`Catch error`.toString().red);
          return false;
        } else if (status === 1) {
          console.log(`Caught ${logUtils.getPokemonNameString(pokemon)}`.toString().green);
          const totalXP = capture_award.xp.reduce((sum, xp) => {
            sum += xp;
            return sum;
          }, 0);
          catchingState.xpEarned = totalXP;
          this.stats.xpPerHour.logEvent(totalXP);
          this.stats.pokemonPerHour.logEvent(1);
          console.log(`Got ${totalXP.toString().green} xp, ${capture_award.candy[0].toString().green} candies, and ${capture_award.stardust[0].toString().green} stardust`);
          return false;
        } else if (status === 2) {
          console.log(`Pokemon broke free! Trying again...`.toString().yellow);
          return true;
        } else if (status === 3) {
          console.log(`Pokemon fled!`.toString().yellow);
          return false;
        } else if (status === 4) {
          console.log(`Missed on purpose, but trying again...`.toString().yellow);
          return true;
        }
      }, () => {
        const isNewPokemon = (catchingState.xpEarned >= xpForNewPokemon);
        if (isNewPokemon) console.log('New Pokemon Found! Waiting for pokedex animation...'.toString().green);
        const postCatchDelay = isNewPokemon ? 3500 : 0;
        return Promise.delay(postCatchDelay).then(resolve);
      });
    });
  }

  getCatchOptions(encounter) {
    let spinModifier = undefined;
    let normalizedReticleSize = undefined;
    let normalizedHitPosition = undefined;

    let hitPokemon = (Math.random() < env.hitPokemonPercent);
    if (hitPokemon) {
      normalizedHitPosition = 1;
      normalizedReticleSize = 1.1 + Math.random() * 0.85;
      spinModifier = (Math.random() <= env.spinPokeballPercent) ? 1 : 0;
    } else {
      hitPokemon = undefined;
      normalizedReticleSize = 1;
    }

    const pokeballItem = this.getPokeballItem(encounter, { forceWorst: !hitPokemon });
    const catchOptions = {
      hitPokemon,
      spinModifier,
      pokeballItem,
      normalizedReticleSize,
      normalizedHitPosition,
    };
    console.log(`${hitPokemon ? 'Hitting' : 'Missing'} pokemon using ${pokeballItem.name} with spin ${catchOptions.spinModifier.toFixed(1)},\
 size: ${catchOptions.normalizedReticleSize.toFixed(2)}`);
    return catchOptions;
  }

  getPokeballItem(encounter, {forceWorst} = {}) {
    const {state} = this;
    const ballItems = InventoryPruner.getItemsByType('ball', state.inventory.items);
    if (!forceWorst &&
      encounter &&
      encounter.probabilities &&
      encounter.probabilities[0] <= 0.5) ballItems.reverse();

    for (let i = 0; i < ballItems.length; ++i) {
      return ballItems[0];
    }
    return null;
  }
}
