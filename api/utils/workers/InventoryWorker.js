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
        const throwAwayItems = InventoryPruner.getThrowAwayItemsSubset(items, throwAwayCountByType);

        if (throwAwayItems.length === 0) {
          return console.log('Keeping all items, bag not full');
        }

        // Pause for a moment before recycling
        this.bot.pause(2000);

        async.eachSeries(throwAwayItems, (item, cb) => {
          const count = item.count;
          const name = logUtils.getItemNameString(item.name);
          console.log(`Recycling ${count} ${name}...`);

          this.bot.pause(delayBetweenItems);
          client.recycleInventoryItem(item.id, count)
            .then(response => {
              if (response.result === 1) {
                console.log(`Recycled ${count} ${name}`.toString().green);
                state.inventory.itemsById[item.id].count = response.new_count;
              } else {
                console.log(`Failed to recyle ${count} ${name}`.toString().red);
              }
              setTimeout(cb, delayBetweenItems);
            });
        });
      });
  }
}
