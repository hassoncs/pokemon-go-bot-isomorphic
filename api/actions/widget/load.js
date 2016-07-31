
const pogobuf = require('pogobuf');
const POGOProtos = require('node-pogo-protos');
const { client, state, s2LatLng } = require('../../utils/pogoClient');

export default function load(req) {
  return new Promise((resolve, reject) => {
    resolve(state);
    return;

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

