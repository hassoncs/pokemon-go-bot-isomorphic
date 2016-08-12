import {expect} from 'chai';

import Pokemon from '../models/Pokemon';
import PokemonPruner from '../bot/utils/PokemonPruner';
import inventoryData from './inventory-fixture';

inventoryData.pokemons = inventoryData.pokemons.map(p => new Pokemon(p));

describe('PokemonPruner', () => {

  it('.getPokemonToEvolve', () => {
    const pokemonToEvolve = PokemonPruner.getPokemonToEvolve(inventoryData);
    expect(pokemonToEvolve.length).to.deep.equal(22);
  });

  it('.getPokemonToTransfer', () => {
    expect(
      PokemonPruner.getPokemonToTransfer(inventoryData, 100).length
    ).to.deep.equal(77);
    expect(
      PokemonPruner.getPokemonToTransfer(inventoryData, Infinity).length
    ).to.deep.equal(150);
  });
});
