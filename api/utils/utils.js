import pogobuf from 'pogobuf';
import POGOProtos from 'node-pogo-protos';
import pokemonList from '../data/pokemon';
import groupBy from 'lodash/groupBy';
import itemData from '../data/itemData';
const itemDataByItemId = groupBy(itemData, 'id');

export default {
  toLocalItems(remoteItems) {
    const items = remoteItems.map(item => {
      const itemData = itemDataByItemId[item.item_id];
      return {
        id: item.item_id,
        type: itemData && itemData[0] && itemData[0].type || 'special',
        count: item.count || item.item_count || 0,
        name: pogobuf.Utils.getEnumKeyByValue(POGOProtos.Inventory.Item.ItemId, item.item_id),
      };
    });
    return items;
  },

  getPokemonByNumber(number) {
    return pokemonList[number - 1];
  }
};
