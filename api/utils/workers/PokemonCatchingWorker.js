import TickWorker from './TickWorker';
import pogobuf from 'pogobuf';
import POGOProtos from 'node-pogo-protos';
import utils from '../utils';
import logUtils from '../logUtils';
import InventoryPruner from '../InventoryPruner';
import async from 'async';

// Wait time after encountering the pokemon before you can catch them
const pauseDurationBeforeCatching = 6000;

export default class PokemonCatchingWorker extends TickWorker {
  constructor({state, client, bot}) {
    super({state, client, bot});
    this._pausedTimeMs = 15000;
  }

  getConfig() {
    return {
      actEvery: 5 * 1000,
    };
  }

  act() {
    const {state} = this;
    const encounters = state.mapSummary.encounters;
    if (encounters.length === 0) return;

    const pokeballItemID = this.getPokeballItemID();
    if (!pokeballItemID) return console.log('Out of pokeballs! Skipping catching.'.red);

    this.encounterPokemon(encounters[0]);
  }

  encounterPokemon(encounter) {
    const {client, state} = this;
    this.bot.pause(this.getConfig().actEvery * 3);
    const {encounterID, spawnPointID} = encounter;

    const data = {};
    state.mapSummary.encounters = state.mapSummary.encounters.filter(p => p !== encounter);
    client.encounter(encounterID, spawnPointID)
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
        const pokemon = wildPokemon.pokemon_data;
        const {
          cp,
          pokemon_id,
          individual_attack,
          individual_defense,
          individual_stamina,
          move_1,
          move_2,
          cp_multiplier,
        } = pokemon;
        const pokedex = utils.getPokemonByNumber(pokemon_id);

        state.encounter.pokemon = pokemon;
        state.encounter.pokemon.pokedex = pokedex;
        data.encounterResponse = encounterResponse;
        console.log(`Catching ${logUtils.getPokemonNameString({pokedex, cp})}...`);
        // console.log(['probabilities',probabilities]);

        return this.catchPokemon(encounter, data.encounterResponse);
      });
  }

  catchPokemon(encounter, encounterResponse) {
    const {client, state} = this;
    const {encounterID, spawnPointID} = encounter;
    const {
      pokeballItemID,
      normalizedReticleSize,
      hitPokemon,
      spinModifier,
      normalizedHitPosition,
    } = this.getCatchOptions(encounterResponse);

    var catchReponse = null;
    async.doWhilst((cb) => {
      this.bot.pause(pauseDurationBeforeCatching);
      new Promise(resolve => setTimeout(resolve, pauseDurationBeforeCatching))
        .then(() => {
          return client.catchPokemon(
            encounterID,
            pokeballItemID,
            normalizedReticleSize,
            spawnPointID,
            hitPokemon,
            spinModifier,
            normalizedHitPosition
          );
        })
        .then((response) => {
          // console.log(`Got a catch response`);
          // console.log(response);
          catchReponse = response;
          cb(null);
        });
    }, () => {
      const {status, capture_award} = catchReponse;
      if (catchReponse === null) {
        return true;
      } else if (status === 0) {
        console.log(`Catch error`.toString().red);
        return false;
      } else if (status === 1) {
        const {pokemon} = state.encounter;
        const {cp, pokemon_id, pokedex} = pokemon;
        console.log(`Caught ${logUtils.getPokemonNameString({pokedex, cp})}`.toString().green);

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
    }, () => {
    });
  }

  getCatchOptions(encounterResponse) {
    const spinModifier = Math.random() * 0.85;
    const normalizedReticleSize = 1 + Math.random() * 0.95;
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
