import pokemonList from '../bot/data/pokemon';
import extend from 'lodash/extend';
import pogobuf from 'pogobuf';
import POGOProtos from 'node-pogo-protos';
import groupBy from 'lodash/groupBy';
import itemData from '../bot/data/itemData';

const itemDataByItemId = groupBy(itemData, 'id');

export default class Item {
  constructor(data) {
    const itemData = itemDataByItemId[data.id];
    extend(this, {
      ...data,
      name: pogobuf.Utils.getEnumKeyByValue(POGOProtos.Inventory.Item.ItemId, data.id),
      type: itemData && itemData[0] && itemData[0].type || 'special',
    });
  }
}
