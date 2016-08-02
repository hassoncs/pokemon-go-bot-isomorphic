import TickWorker from './TickWorker';
import pogobuf from 'pogobuf';
import POGOProtos from 'node-pogo-protos';
import utils from '../utils';
import logUtils from '../logUtils';
import InventoryPruner from '../InventoryPruner';

export default class InventoryWorker extends TickWorker {
  getConfig() {
    return {
      actEvery: 30 * 1000, // 30 seconds
    };
  }

  act() {
    console.log(['InventoryWorker act',]);
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
        if (Object.keys(throwAwayCountByType).length === 0) {
          return console.log('Keeping all items, bag not full');
        }

        //Object.keys(throwAwayCountByType).forEach(type => {
        //  console.log(`Recycling ${count}` );
        //});

        client.recycleInventoryItem();

        //items.forEach(item => {
        //  console.log(item);
        //});
      });
  }
}
