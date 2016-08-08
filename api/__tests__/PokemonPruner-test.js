import {expect} from 'chai';

import cloneDeep from 'lodash/cloneDeep';
import PokemonPruner from '../utils/PokemonPruner';
import inventoryData from './inventory-fixture';

describe('PokemonPruner', () => {

  it('.runs the test', () => {
    const pruneResult = PokemonPruner.prune(inventoryData);
    console.log(`pruneResult`);
    console.log(pruneResult);

    expect(pruneResult).to.deep.equal({
      pokemonToEvolve: [
        '9','12','12','12','12','12','12','15','15','15','15','15','15','15','15','15','15','15','15','15','15','15','15','15','15','15','15','18','18','18','18','18','40','40','40','40','40','40','53','53','53','53','59','71','71','71','128','132','146']
    });
  });
});
