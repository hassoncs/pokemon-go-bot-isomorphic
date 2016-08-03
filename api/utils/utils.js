import pogobuf from 'pogobuf';
import POGOProtos from 'node-pogo-protos';

export default {
  toLocalItems(remoteItems) {
    const items = remoteItems.map(item => ({
      id: item.item_id,
      count: item.count,
      name: pogobuf.Utils.getEnumKeyByValue(POGOProtos.Inventory.Item.ItemId, item.item_id),
    }));
    return items;
  }
};