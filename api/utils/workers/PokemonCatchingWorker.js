import TickWorker from './TickWorker';
import pogobuf from 'pogobuf';
import POGOProtos from 'node-pogo-protos';
import utils from '../utils';
import logUtils from '../logUtils';
import InventoryPruner from '../InventoryPruner';
import async from 'async';
import Promise from 'bluebird';

// Wait time after encountering the pokemon before you can catch them
const pauseDurationBeforeCatching = 6000;

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
    console.log(`There are ${encounters.length} pokemon that I could catch`);
    if (encounters.length === 0) return;

    const pokeballItemID = this.getPokeballItemID();
    if (!pokeballItemID) return console.log('Out of pokeballs! Skipping catching.'.red);

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

        if (encounterResponse.status !== 1) return console.log(`Failed to encounter the Pokemon :(`.toString().red);

        const {capture_probability} = encounterResponse;
        const difficulty = capture_probability.reticle_difficulty_scale;
        const probabilities = capture_probability.capture_probability;
        const wildPokemon = encounterResponse.wild_pokemon;
        const remotePokemon = wildPokemon.pokemon_data;
        const pokemon = utils.toLocalPokemon(remotePokemon);

        state.encounter.pokemon = pokemon;
        data.encounterResponse = encounterResponse;
        console.log(`Catching ${logUtils.getPokemonNameString(pokemon)}...`);
        // console.log(['probabilities',probabilities]);

        return this.catchPokemon(encounter, data.encounterResponse, pokemon);
      });
  }

  catchPokemon(encounter, encounterResponse, pokemon) {
    const {client} = this;
    const {encounterID, spawnPointID} = encounter;

    return new Promise(resolve => {
      var catchReponse = null;
      async.doWhilst((cb) => {
        Promise.delay(pauseDurationBeforeCatching)
          .then(() => {
            const {
              pokeballItemID,
              normalizedReticleSize,
              hitPokemon,
              spinModifier,
              normalizedHitPosition,
            } = this.getCatchOptions();
            if (!pokeballItemID) {
              console.log('Out of pokeballs! Skipping catching.'.red);
              return Promise.resolve();
            }
            return client.catchPokemon(
              encounterID,
              pokeballItemID,
              normalizedReticleSize,
              spawnPointID,
              hitPokemon,
              spinModifier,
              normalizedHitPosition
            ).timeout(10000);
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
          const {cp, pokedex} = pokemon;
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

  getCatchOptions() {
    const spinModifier = 0.25 + Math.random() * 0.6;
    const normalizedReticleSize = 1.1 + Math.random() * 0.85;
    const normalizedHitPosition = 1.0;
    const catchOptions = {
      spinModifier,
      normalizedReticleSize,
      normalizedHitPosition,
      hitPokemon: true,
      pokeballItemID: this.getPokeballItemID(),
    };
    // console.log(`Using catch options...`);
    // console.log(JSON.stringify(catchOptions));

    return catchOptions;
  }

  getPokeballItemID() {
    const {state} = this;
    const ballItems = InventoryPruner.getItemsByType('ball', state.inventory.items);
    for (let i = 0; i < ballItems.length; ++i) {
      return ballItems[0].id;
    }
    return 0;
  }
}
