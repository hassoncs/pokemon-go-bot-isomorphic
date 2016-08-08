import pogobuf from 'pogobuf';
import POGOProtos from 'node-pogo-protos';
import pokemonList from '../data/pokemon';
import extend from 'lodash/extend';
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

  getPokedexByPokemonIndex(pokemonIndex) {
    return pokemonList[pokemonIndex];
  },

  toLocalPokemon(remotePokemon) {
    const {
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
  }
};


class Pokemon {
  constructor(data) {
    extend(this, data);
    this.pokedex = pokemonList[this.pokemonIndex];
  }
}
