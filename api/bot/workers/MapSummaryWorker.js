import TickWorker from './TickWorker';
import Long from 'long';
const s2 = require('s2geometry-node');
import isFunction from 'lodash/isFunction';
import {
  distanceBetweenLatLngs,
  latLngToFeaturePoint,
  latLngsToFeatureLine,
  featureToLatLng,
  randomLatLng,
} from '../utils/geo';

export default class MapSummaryWorker extends TickWorker {
  constructor({state, client, bot}) {
    super({state, client, bot});
    this._pausedTimeMs = 10000;
  }

  getConfig() {
    const randomSeconds = Math.random() * 10;
    return {
      actEvery: (10 + randomSeconds) * 1000,
    };
  }

  act() {
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

        mapSummary.encounters = mapSummary.catchable_pokemons.map(encounter => {
          return {
            encounterID: encounter.encounter_id,
            pokemonID: encounter.pokemon_id,
            spawnPointID: encounter.spawn_point_id,
            expirationTimestampMs: encounter.expiration_timestamp_ms,
            latLng: {lat: encounter.latitude, lng: encounter.longitude},
          };
        });
        delete mapSummary.catchable_pokemons;

        mapSummary.forts.forEach((fort) => {
          mapSummary.fortsByIds[fort.id] = fort;
        });
        state.mapSummary = mapSummary;
        console.log(
          `Found ${mapSummary.encounters.length} catchable pokemon, and ${mapSummary.forts.length} Pokestops`.toString().green);
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
