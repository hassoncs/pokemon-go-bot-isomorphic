import TickWorker from './TickWorker';
const s2 = require('s2geometry-node');
import {
  distanceBetweenLatLngs,
  latLngToFeaturePoint,
  getLatLngAlong,
  latLngsToFeatureLine,
  featureToLatLng,
  randomLatLng,
} from '../geo';

export default class MapSummaryWorker extends TickWorker {
  getConfig() {
    return {
      actEvery: 10 * 1000, // 60 seconds
    };
  }

  act() {
    console.log(['MapSummaryWorker act',]);
    const {client, state} = this;

    const {currentLatLng} = state.movement;
    const cellIDs = this.getCellIDs(currentLatLng, 10); // cell count
    return client.getMapObjects(cellIDs, Array(cellIDs.length).fill(0))
      .then(mapObjects => {
        const mapSummary = {
          catchable_pokemons: [],
          decimated_spawn_points: [],
          fort_summaries: [],
          forts: [],
          nearby_pokemons: [],
          spawn_points: [],
          wild_pokemons: [],
          fortsByIds: {}
        };
        mapObjects.map_cells.forEach((cell) => {
          Object.keys(mapSummary).forEach((key) => {
            if (!cell[key]) return;
            mapSummary[key] = mapSummary[key].concat(cell[key]);
          });
        });

        mapSummary.forts.forEach((fort) => {
          mapSummary.fortsByIds[fort.id] = fort;
        });
        state.mapSummary = mapSummary;
        console.log(
          `MapSummary resolved. 
          Catchable: ${mapSummary.catchable_pokemons.length}, 
          Forts: ${mapSummary.forts.length}`);
      });
  }

  /**
   * Utility method to get all the S2 Cell IDs in a given radius.
   * Ported from https://github.com/tejado/pgoapi/blob/master/pokecli.py
   * @param {number} radius - radius around lat lng to return cellIDs
   * @returns {array} Array of cell Ids
   */
  getCellIDs(currentLatLng, radius) {
    const s2LatLng = new s2.S2LatLng(currentLatLng.lat, currentLatLng.lng);
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
}