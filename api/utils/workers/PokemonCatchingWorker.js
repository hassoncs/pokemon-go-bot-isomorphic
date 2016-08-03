import TickWorker from './TickWorker';
import pogobuf from 'pogobuf';
import POGOProtos from 'node-pogo-protos';
import utils from '../utils';
import logUtils from '../logUtils';

export default class PokemonCatchingWorker extends TickWorker {
  getConfig() {
    return {
      actEvery: 10 * 1000,
    };
  }

  act() {
    const {state} = this;
    const {pokemon} = state.mapSummary;

    if (pokemon.length > 0) {
      this.catchPokemon(pokemon[0]);
    }
  }

  catchPokemon(pokemon) {
    const {client, state} = this;
    console.log(`Catching Pokemon`);
    console.log(pokemon);
    this.pause(8000);

    const {encounterID, spawnPointID} = pokemon;
    const pokeballItemID = 1;
    const normalizedReticleSize = 1.95;
    const hitPokemon = true;
    const spinModifier = 0.85;
    const normalizedHitPosition = 1;

    console.log(`state.mapSummary.pokemon ${state.mapSummary.pokemon.length}`);
    state.mapSummary.pokemon = state.mapSummary.pokemon.filter(p => p !== pokemon);
    console.log(`removed pokemon from mapSummary ${state.mapSummary.pokemon.length}`);

    client.encounter(encounterID, spawnPointID)
      .then(encounterResponse => {
        console.log(`encounterResponse`);
        console.log(JSON.stringify(encounterResponse));

        return new Promise(resolve => setTimeout(resolve, 5000));
      })
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
      .then(catchResponse => {
        console.log(`catchPokemon response`);
        console.log(JSON.stringify(catchResponse));
      });
  }
}