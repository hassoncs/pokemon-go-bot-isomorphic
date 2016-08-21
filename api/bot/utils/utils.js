import pokemonList from '../data/pokemon';
import Item from '../models/Item';

export default {
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
