import {expect} from 'chai';

import PokemonPruner from '../utils/PokemonPruner';
import inventoryData from './inventory-fixture';

describe('PokemonPruner', () => {

  it('.runs the test', () => {
    const pokemonToEvolve = PokemonPruner.getPokemonToEvolve(inventoryData);
    expect(pokemonToEvolve.length).to.deep.equal(49);
  });
});
