const s2 = require('s2geometry-node');
const pogobuf = require('pogobuf');
const POGOProtos = require('node-pogo-protos');
const { client, latLng, s2LatLng } = require('../../utils/pogoClient');

export default function load(req) {
  return new Promise((resolve, reject) => {
    const data = {};

    const cellIDs = getCellIDs(10); // cell count
    return client.getMapObjects(cellIDs, Array(cellIDs.length).fill(0))
      .then(mapObjects => {
        console.log("map objects resolved");

        const mapSummary = {
          catchable_pokemons: [],
          decimated_spawn_points: [],
          fort_summaries: [],
          forts: [],
          nearby_pokemons: [],
          spawn_points: [],
          wild_pokemons: [],
        };
        mapObjects.map_cells.forEach((cell) => {
          Object.keys(mapSummary).forEach((key) => {
            mapSummary[key] = mapSummary[key].concat(cell[key]);
          });
        });
        data.mapSummary = mapSummary;
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });

    // client.getInventory(0)
    //   .then(rawInventory => {
    //     if (!rawInventory.success) reject('success=false in inventory response');
    //
    //     // Split inventory into individual arrays and log them on the console
    //     const inventory = pogobuf.Utils.splitInventory(rawInventory);
    //     data.inventory = inventory;
    //
    //     // console.log('Items:');
    //     // inventory.items.forEach(item => {
    //     //   console.log(item.count + 'x ' + pogobuf.Utils.getEnumKeyByValue(POGOProtos.Inventory.Item.ItemId, item.item_id));
    //     // });
  });
}

/**
 * Utility method to get all the S2 Cell IDs in a given radius.
 * Ported from https://github.com/tejado/pgoapi/blob/master/pokecli.py
 * @param {number} radius - radius around lat lng to return cellIDs
 * @returns {array} Array of cell Ids
 */
function getCellIDs(radius) {
  let cell = new s2.S2CellId(s2LatLng),
    parentCell = cell.parent(15),
    prevCell = parentCell.prev(),
    nextCell = parentCell.next(),
    cellIDs = [parentCell.id()];

  for (var i = 0; i < radius; i++) {
    cellIDs.unshift(prevCell.id());
    cellIDs.push(nextCell.id());
    prevCell = prevCell.prev();
    nextCell = nextCell.next();
  }

  return cellIDs;
}
