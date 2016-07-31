const pogobuf = require('pogobuf');
const login = new pogobuf.PTCLogin();
const env = require('../../../env');
const s2 = require('s2geometry-node');
import jsonfile from 'jsonfile';
import {
  distanceBetweenLatLngs,
  latLngToFeaturePoint,
  getLatLngAlong,
  latLngsToFeatureLine,
  featureToLatLng,
  randomLatLng,
} from '../geo';
const { s2LatLng } = require('../../utils/pogoClient');

export class TickWorker {
  constructor({state, client}) {
    this.state = state;
    this.client = client;
    this._elapsedTimeSinceActMs = Infinity;
  }

  getConfig() {
    return {
      actEvery: 5000,
    };
  }

  didTick(elapsed) {
    this._elapsedTimeSinceActMs += elapsed;

    const {actEvery} = this.getConfig();
    if (actEvery <= this._elapsedTimeSinceActMs) {
      this.act();
      this._elapsedTimeSinceActMs = 0;
    }
  }

  act() {
    console.log(['Worker act',]);
  }
}


export class LoginWorker extends TickWorker {
  getConfig() {
    return {
      actEvery: 30 * 60 * 10000, // 30 mins
    };
  }

  act() {
    console.log(['LoginWorker act',]);
    const {client, state} = this;

    console.log('LOGGING IN!');
    login.login(env.username, env.password)
      .then(token => {
        const latLng = state.movement.currentLatLng;
        client.setAuthInfo('ptc', token);
        client.setPosition(latLng.lat, latLng.lng);
        return client.init();
      })
      .then(() => {
        console.log(['Logged in!']);
      });
  }
}


export class StateSaveWorker extends TickWorker {
  getConfig() {
    return {
      actEvery: 1000,
    };
  }

  act() {
    const {state} = this;
    const STATE_FILE_NAME = '/tmp/pogobot-state.json';
    jsonfile.writeFile(STATE_FILE_NAME, state, function (err) {
      if (err) console.error(['Failed to save state: ' + err,
        state]);
    })
  }
}

export class MapSummaryWorker extends TickWorker {
  getConfig() {
    return {
      actEvery: 10 * 1000,
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
        };
        mapObjects.map_cells.forEach((cell) => {
          Object.keys(mapSummary).forEach((key) => {
            mapSummary[key] = mapSummary[key].concat(cell[key]);
          });
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


export class PositionUpdateWorker extends TickWorker {
  getConfig() {
    return {
      actEvery: 5000,
    };
  }

  act() {
    console.log(['PositionUpdateWorker act',]);
    const {client, state} = this;
    const {currentLatLng, targetLatLng, speedMps} = state.movement;

    if (!client.endpoint || this._elapsedTimeSinceActMs === Infinity) {
      return console.log(['Skipping update, not logged in.',]);
    }

    const distanceToTarget = distanceBetweenLatLngs(currentLatLng, targetLatLng);
    const timeTilTarget = distanceToTarget / speedMps;
    console.log(`Distance to target: ${distanceToTarget.toFixed(2)}m, time: ${timeTilTarget.toFixed(2)}s`);

    const distTraveledMeters = speedMps * (this._elapsedTimeSinceActMs / 1000);
    const closerLatLng = getLatLngAlong(currentLatLng, targetLatLng, distTraveledMeters / 1000);
    state.movement.currentLatLng = closerLatLng;

    const randomMeters = 8;
    const randomizedLatLng = randomLatLng(closerLatLng, randomMeters / 1000);

    // client.playerUpdate(randomizedLatLng.lat, randomizedLatLng.lng)
    //   .then(() => {
    console.log('New player position:', [randomizedLatLng.lat, randomizedLatLng.lng]);
    // });
  }
}

export class TargetObjectiveWorker extends TickWorker {
  getConfig() {
    return {
      actEvery: 2500,
    };
  }

  act() {
    console.log(['TargetObjectiveWorker act',]);
    const {client, state} = this;
    const {currentLatLng, targetLatLng, speedMps} = state.movement;

    const distanceToTarget = distanceBetweenLatLngs(currentLatLng, targetLatLng);
    const timeTilTarget = distanceToTarget / speedMps;
    console.log(`Distance to target: ${distanceToTarget.toFixed(2)}m, time: ${timeTilTarget.toFixed(2)}s`);

  }
}