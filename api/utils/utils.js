import pogobuf from 'pogobuf';
import POGOProtos from 'node-pogo-protos';
import pokemonList from '../data/pokemon';
import groupBy from 'lodash/groupBy';

export default {
  toLocalItems(remoteItems) {
    const items = remoteItems.map(item => ({
      id: item.item_id,
      count: item.count || item.item_count || 0,
      name: pogobuf.Utils.getEnumKeyByValue(POGOProtos.Inventory.Item.ItemId, item.item_id),
    }));
    return items;
  },

  getPokemonByNumber(number) {
    return pokemonList[number - 1];
  }
};