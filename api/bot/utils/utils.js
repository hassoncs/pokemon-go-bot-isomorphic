import pogobuf from 'pogobuf';
import POGOProtos from 'node-pogo-protos';
import pokemonList from '../../data/pokemon';
import groupBy from 'lodash/groupBy';
import itemData from '../../data/itemData';
import Pokemon from '../../models/Pokemon';
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
      move1: move_1,
      move2: move_2,
      cpMultiplier: cp_multiplier,
      stamina,
      staminaMax: stamina_max,
    });
  },

  deltaItem(itemId, delta, inventory) {
    const item = inventory.itemsById[itemId];
    if (!item) return console.warn(['No item with id', itemId]);
    item.count = Math.max(0, item.count + delta);
    //return console.log(['New item count', item.name, item.count]);
  },
};
