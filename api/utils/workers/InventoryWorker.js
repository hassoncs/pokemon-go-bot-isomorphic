import TickWorker from './TickWorker';
import pogobuf from 'pogobuf';
import POGOProtos from 'node-pogo-protos';
import utils from '../utils';
import logUtils from '../logUtils';
import InventoryPruner from '../InventoryPruner';
import async from 'async';

const delayBetweenItems = 3000;

export default class InventoryWorker extends TickWorker {
  constructor({state, client, bot}) {
    super({state, client, bot});
    //this._pausedTimeMs = 7500;
  }

  getConfig() {
    return {
      actEvery: 30 * 1000, // 30 seconds
    };
  }

  act() {
    const {client, state} = this;
    client.getInventory(0)
      .then(rawInventory => {
        if (!rawInventory.success) reject('success=false in inventory response');

        console.log('Inventory successful'.green);

        const inventory = pogobuf.Utils.splitInventory(rawInventory);
        const items = utils.toLocalItems(inventory.items);
        logUtils.logItems(items);

        const itemsById = {};
        items.map(item => itemsById[item.id] = item);

        state.inventory.items = items;
        state.inventory.itemsById = itemsById;

        // Check if we should throw anything away..
        const throwAwayCountByType = InventoryPruner.getThrowAwayCountByType(items);
        const throwAwayCountByItemId = InventoryPruner.getThrowAwayCountByItemId(items, throwAwayCountByType);

        if (Object.keys(throwAwayCountByItemId).length === 0) {
          return console.log('Keeping all items, bag not full');
        }

        const itemIds = Object.keys(throwAwayCountByItemId);
        async.eachSeries(itemIds, (itemId, cb) => {
          const count = throwAwayCountByItemId[itemId];
          console.log(`Recycling ${count} of item ${itemId}...`);

          this.bot.pause(delayBetweenItems);
          client.recycleInventoryItem(itemId, count)
            .then(response => {
              if (response.result === 1) {
                console.log(`Recycling item successful`.toString().green);
                state.inventory.itemsById[itemId].count = response.new_count;
              } else {
                console.log(`Recycling item failed`.toString().red);
              }
              setTimeout(cb, delayBetweenItems);
            });
        });
      });
  }
}
