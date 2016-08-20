import pokemonList from '../data/pokemon';
import Pokemon from '../models/Pokemon';
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

  toLocalPokemon(remotePokemon) {
    const {
      id,
      cp,
      pokemon_id,
      individual_attack,
      individual_defense,
      individual_stamina,
      is_egg,
      move_1,
      move_2,
      cp_multiplier,
      stamina,
      stamina_max
    } = remotePokemon;

    const pokemonIndex = parseInt(pokemon_id, 10) - 1;
    return new Pokemon({
      id,
      cp,
      pokemonIndex,
      pokemonID: pokemon_id,
      individualAttack: individual_attack,
      individualDefense: individual_defense,
      individualStamina: individual_stamina,
      isEgg: is_egg,
      move1: move_1,
      move2: move_2,
      cpMultiplier: cp_multiplier,
      stamina,
      staminaMax: stamina_max,
    });
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
