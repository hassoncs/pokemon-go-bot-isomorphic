import TickWorker from './TickWorker';
import pogobuf from 'pogobuf';
import POGOProtos from 'node-pogo-protos';
import utils from '../utils';
import logUtils from '../logUtils';
import async from 'async';

const pauseDurationBeforeCatching = 5000;

export default class PokemonCatchingWorker extends TickWorker {
  getConfig() {
    return {
      actEvery: 10 * 1000,
    };
  }

  act() {
    const {state} = this;
    const encounters = state.mapSummary.pokemons;

    if (encounters.length > 0) {
      this.encounterPokemon(encounters[0]);
    }
  }

  encounterPokemon(encounter) {
    const {client, state} = this;
    console.log(`Encountering Pokemon`);
    this.bot.pause(this.getConfig().actEvery);
    const {encounterID, spawnPointID} = encounter;

    const data = {};
    state.mapSummary.pokemons = state.mapSummary.pokemons.filter(p => p !== encounter);
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
        state.encounter.pokemon = pokemon;

        data.encounterResponse = encounterResponse;
        console.log(`Trying to catch pokemon ${pokemon_id} with CP ${cp}, diff ${difficulty}, probabilities ${probabilities}`);

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
      console.log(`catchReponse ${catchReponse}`);
      const {status, capture_award} = catchReponse;
      if (catchReponse === null) {
        return true;
      } else if (status === 0) {
        console.log(`Catch error`.toString().red);
        return false;
      } else if (status === 1) {
        console.log(`Catch success!`.toString().green);
        const {pokemon} = state.encounter;
        const {cp, pokemon_id} = pokemon;
        console.log(`Caught pokemon ${pokemon_id} with CP ${cp}!`.toString().green);
        const totalXP = capture_award.xp[0] + capture_award.xp[1] + capture_award.xp[2];
        console.log(`Got ${totalXP}XP, ${capture_award.candy[0]} candies, and ${capture_award.stardust[0]} stardust`.toString().green);
        return false;
      } else if (status === 2) {
        console.log(`Pokemon broke free! Trying again...`.toString().yellow);
        return true;
      } else if (status === 3) {
        console.log(`Pokemon fled!`.toString().yellow);
        return false;
      }
    }, () => {
      console.log(`Done trying to catch the pokemon.`);
    });
  }

  getCatchOptions(encounterResponse) {
    return {
      pokeballItemID: this.getPokeballItemID(),
      normalizedReticleSize: 1.95,
      hitPokemon: true,
      spinModifier: 0.85,
      normalizedHitPosition: 1.0,
    };
  }

  getPokeballItemID() {
    return 1;
  }
}
