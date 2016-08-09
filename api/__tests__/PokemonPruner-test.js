import {expect} from 'chai';

import Pokemon from '../models/Pokemon';
import PokemonPruner from '../bot/utils/PokemonPruner';
import inventoryData from './inventory-fixture';

inventoryData.pokemons = inventoryData.pokemons.map(p => new Pokemon(p));

describe('PokemonPruner', () => {

  it('.getPokemonToEvolve', () => {
    const pokemonToEvolve = PokemonPruner.getPokemonToEvolve(inventoryData);
    expect(pokemonToEvolve.length).to.deep.equal(49);
  });

  it('.getPokemonToTransfer', () => {
    const pokemons = PokemonPruner.getPokemonToTransfer(inventoryData);
    expect(pokemons.length).to.deep.equal(164);
  });
});
