import _ from 'lodash';
import itemData from '../data/itemData';

const maxInventorySize = 300;
const percentByType = {
  ball: .50,
  potion: .15,
  revive: .05,
  berry: .15,
};
const types = ['ball', 'potion', 'revive', 'berry'];

class InventoryPruner {
  getItemsByType(type, items) {
    return _(items)
      .filter({type})
      .filter(item => item.count > 0)
      .value() || [];
  }

  getThrowAwayCountByType(items) {
    // Figure out how many of each type we have

    //const totalItemCount = items.reduce((sum, item) => sum += item.count, 0);
    //console.log(['totalItemCount',totalItemCount]);

    const itemCountByType = types.reduce((countsByType, type) => {
      const itemIdsOfType = this.getItemMapForType(type);
      const itemsOfType = items.filter(item => itemIdsOfType[item.id]);
      const itemCountOfType = itemsOfType.reduce((sum, item) => sum += item.count, 0);
      countsByType[type] = itemCountOfType;
      return countsByType;
    }, {});
    //console.log(['itemCountByType',itemCountByType]);

    const throwAwayCountByType = types.reduce((throwAwayCountByType, type) => {
      const desiredPercent = percentByType[type];
      const desiredCount = maxInventorySize * desiredPercent;
      const throwAwayCount = itemCountByType[type] - desiredCount;
      if (throwAwayCount > 0) {
        throwAwayCountByType[type] = throwAwayCount;
        //console.log(`For ${type}, we have ${itemCountByType[type]}, but want ${desiredCount}, so throwing away ${throwAwayCount}`);
      }
      return throwAwayCountByType;
    }, {});

    return throwAwayCountByType;
  }

  getThrowAwayCountByItemId(items, throwAwayCountByType) {
    // Now we know which types to throw away, figure out how many of each item
    const throwAwayCountByItemId = {};

    types.forEach((type) => {
      const itemIds = _(itemData)
        .filter({type})
        .map('id')
        .sortBy()
        .value();
      let throwAwayCount = throwAwayCountByType[type];
      if (!throwAwayCount) return;
      //console.log(`Need to throw away ${throwAwayCount} of type ${type}`);

      itemIds.forEach(itemId => {
        if (throwAwayCount <= 0) return;

        const item = _.find(items, {id: itemId});
        if (!item) return; //console.log(`Player has no ${itemId}, skipping`);

        const itemThrowAwayCount = Math.min(item.count, throwAwayCount);
        if (itemThrowAwayCount > 0) {
          throwAwayCount -= itemThrowAwayCount;
          //console.log(`  Throwing away ${itemThrowAwayCount} of item type ${itemId}`);
          throwAwayCountByItemId[itemId] = itemThrowAwayCount;
        }
        //if (throwAwayCount > 0) {
        //  console.log(`Still need to throw away ${throwAwayCount} more`);
        //}
      });
    });

    return throwAwayCountByItemId;
  }

  getItemMapForType(type) {
    return _(itemData)
      .filter({type})
      .map((item) => [item.id, item.id])
      .fromPairs()
      .value();
  }
}

export default new InventoryPruner();
