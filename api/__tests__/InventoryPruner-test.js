import {expect} from 'chai';

import InventoryPruner from '../bot/utils/InventoryPruner';

describe('InventoryPruner', () => {

  const items = [
    {id: 901, count: 1, name: 'Item Incubator Basic Unlimited'},
    {id: 902, count: 3, name: 'Item Incubator Basic'},
    {id: 201, count: 54, name: 'Item Revive'},
    {id: 701, count: 67, name: 'Item Razz Berry'},
    {id: 301, count: 2, name: 'Item Lucky Egg'},
    {id: 1, count: 58, name: 'Item Poke Ball'},
    {id: 2, count: 80, name: 'Item Great Ball'},
    {id: 401, count: 4, name: 'Item Incense Ordinary'},
    {id: 101, count: 14, name: 'Item Potion'},
    {id: 102, count: 44, name: 'Item Super Potion'},
    {id: 103, count: 22, name: 'Item Hyper Potion'},
    {id: 501, count: 3, name: 'Item Troy Disk'}];

  it('.getThrowAwayCountByType', () => {
    const throwAwayCountByType = InventoryPruner.getThrowAwayCountByType(items, 300);

    expect(throwAwayCountByType).to.deep.equal({
      potion: 35,
      revive: 39,
      berry: 22,
    });
  });

  it('.getThrowAwayCountByItemId', () => {
    const throwAwayCountByType = {
      potion: 35,
      revive: 39,
      berry: 22,
    };
    const throwAwayCountByItemId = InventoryPruner.getThrowAwayCountByItemId(items, throwAwayCountByType);
    expect(throwAwayCountByItemId).to.deep.equal({
      '101': 14,
      '102': 21,
      '201': 39,
      '701': 22,
    });
  });
});
