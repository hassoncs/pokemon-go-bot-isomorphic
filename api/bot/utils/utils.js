import pokemonList from '../data/pokemon';
import Item from '../models/Item';

export default {
  toLocalItems(remoteItems) {
    const items = remoteItems.map(item => {
      return new Item({
        id: item.item_id,
        count: item.count || item.item_count || 0,
      });
    });
    return items;
  },

  getPokedexByPokemonIndex(pokemonIndex) {
    return pokemonList[pokemonIndex];
  },

  deltaItem(itemId, delta, inventory) {
    const item = inventory.itemsById[itemId];
    if (!item) {
      inventory.itemsById[itemId] = new Item({
        id: itemId,
        count: delta,
      });
    } else {
      item.count = Math.max(0, item.count + delta);
    }
    //return console.log(['New item count', item.name, item.count]);
  },
};
