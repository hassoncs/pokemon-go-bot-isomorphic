import TickWorker from './TickWorker';
import pogobuf from 'pogobuf';
import POGOProtos from 'node-pogo-protos';
import utils from '../utils';
import logUtils from '../logUtils';

export default class InventoryWorker extends TickWorker {
  getConfig() {
    return {
      actEvery: 60 * 1000,
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
        logUtils.logItems(items, 'green');

        const itemsById = {};
        items.map(item => itemsById[item.id] = item);

        state.inventory.items = items;
        state.inventory.itemsById = itemsById;
      });
  }
}