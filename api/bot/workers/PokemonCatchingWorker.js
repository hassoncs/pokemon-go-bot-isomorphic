import TickWorker from './TickWorker';
import pogobuf from 'pogobuf';
import POGOProtos from 'node-pogo-protos';
import utils from '../utils/utils';
import logUtils from '../utils/logUtils';
import InventoryPruner from '../utils/InventoryPruner';
import async from 'async';
import Promise from 'bluebird';

// Wait time after encountering the pokemon before you can catch them
const pauseDurationBeforeCatching = 7000;

export default class PokemonCatchingWorker extends TickWorker {
  constructor({state, client, bot}) {
    super({state, client, bot});
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
        return this.encounterPokemon(encounter).then(cb);
      }, resolve);
    }));
  }

  encounterPokemon(encounter) {
    const {client, state} = this;
    const {encounterID, spawnPointID} = encounter;

    const data = {};
    state.mapSummary.encounters = state.mapSummary.encounters.filter(p => p !== encounter);
    return client.encounter(encounterID, spawnPointID)
      .then(encounterResponse => {
        // console.log(`encounterResponse`);
        // console.log(JSON.stringify(encounterResponse));
        state.encounter = {
          encounterResponse
        };

        if (encounterResponse.status !== 1) {
          console.log(`Failed to encounter the Pokemon :(`.toString().red);
          return Promise.resolve();
        }

        const {capture_probability} = encounterResponse;
        const probabilities = capture_probability.capture_probability;
        const wildPokemon = encounterResponse.wild_pokemon;
        const remotePokemon = wildPokemon.pokemon_data;
        const pokemon = utils.toLocalPokemon(remotePokemon);

        state.encounter.pokemon = pokemon;
        state.encounter.probabilities = probabilities;
        data.encounterResponse = encounterResponse;
        console.log(`Catching ${logUtils.getPokemonNameString(pokemon)}...`);
        console.log(`Probs ${probabilities.map(p => (p * 100).toFixed(0)).join('%, ')}%`);
        // console.log(['probabilities',probabilities]);

        return this.catchPokemon(encounter, data.encounterResponse, pokemon);
      })
      .then(Promise.delay.bind(this, 1500));
  }

  catchPokemon(encounter, encounterResponse, pokemon) {
    const {client, state} = this;
    const {encounterID, spawnPointID} = encounter;

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
            utils.deltaItem(pokeballItem.id, -1, state.inventory);
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
            // console.log(`Got a catch response`);
            // console.log(response);
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
          console.log(`Got ${totalXP.toString().green} xp, ${capture_award.candy[0].toString().green} candies, and ${capture_award.stardust[0].toString().green} stardust`);
          return false;
        } else if (status === 2) {
          console.log(`Pokemon broke free! Trying again...`.toString().yellow);
          return true;
        } else if (status === 3) {
          console.log(`Pokemon fled!`.toString().yellow);
          return false;
        }
      }, resolve);
    });
  }

  getCatchOptions(encounter) {
    const spinModifier = 0 + Math.random() * 0.85;
    const normalizedReticleSize = 1.1 + Math.random() * 0.85;
    const normalizedHitPosition = 1.0;
    const pokeballItem = this.getPokeballItem(encounter);
    const catchOptions = {
      spinModifier,
      normalizedReticleSize,
      normalizedHitPosition,
      pokeballItem,
      hitPokemon: true,
    };
    console.log(`Using a ${pokeballItem.name} with spin ${catchOptions.spinModifier.toFixed(1)},\
 size: ${catchOptions.normalizedReticleSize.toFixed(2)}`);
    return catchOptions;
  }

  getPokeballItem(encounter) {
    const {state} = this;
    const ballItems = InventoryPruner.getItemsByType('ball', state.inventory.items);
    if (encounter &&
      encounter.probabilities &&
      encounter.probabilities[0] <= 0.5) ballItems.reverse();

    for (let i = 0; i < ballItems.length; ++i) {
      return ballItems[0];
    }
    return null;
  }
}
