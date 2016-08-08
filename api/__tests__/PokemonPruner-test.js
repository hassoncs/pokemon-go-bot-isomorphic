import {expect} from 'chai';

import cloneDeep from 'lodash/cloneDeep';
import PokemonPruner from '../utils/PokemonPruner';
import inventoryData from './inventory-fixture';

describe('PokemonPruner', () => {

  it('.runs the test', () => {
    const pruneResult = PokemonPruner.prune(inventoryData);
    expect(pruneResult.pokemonToEvolve.length).to.deep.equal(49);
  });
});
