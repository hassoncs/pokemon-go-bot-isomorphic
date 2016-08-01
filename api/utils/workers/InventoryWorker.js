import TickWorker from './TickWorker';
import pogobuf from 'pogobuf';
import POGOProtos from 'node-pogo-protos';

export default class InventoryWorker extends TickWorker {
  getConfig() {
    return {
      actEvery: 10 * 1000, // 30 seconds
    };
  }

  act() {
    console.log(['InventoryWorker act',]);
    const {client, state} = this;

    client.getInventory(0)
      .then(rawInventory => {
        if (!rawInventory.success) reject('success=false in inventory response');

        // Split inventory into individual arrays and log them on the console
        const inventory = pogobuf.Utils.splitInventory(rawInventory);
        state.inventory = inventory;

        console.log('Items:');
        inventory.items.forEach(item => {
          console.log(item.count + 'x ' + pogobuf.Utils.getEnumKeyByValue(POGOProtos.Inventory.Item.ItemId, item.item_id));
        });
      });
  }
}