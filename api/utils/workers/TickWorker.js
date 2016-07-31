const pogobuf = require('pogobuf');
const login = new pogobuf.PTCLogin();
const env = require('../../../env');
const s2 = require('s2geometry-node');
import sortBy from 'lodash/sortBy';
import jsonfile from 'jsonfile';
import {
  distanceBetweenLatLngs,
  latLngToFeaturePoint,
  getLatLngAlong,
  latLngsToFeatureLine,
  featureToLatLng,
  randomLatLng,
} from '../geo';
const {s2LatLng} = require('../../utils/pogoClient');

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

const POKESTOP_USAGE_RADIUS = 8;
export class PositionUpdateWorker extends TickWorker {
  getConfig() {
    return {
      actEvery: 5000,
    };
  }

  act() {
    const {client, state} = this;
    const {target} = state;
    const {targetFortId} = target;
    const {currentLatLng, targetLatLng, speedMps} = state.movement;

    if (!client.endpoint || this._elapsedTimeSinceActMs === Infinity) {
      return console.log(['Skipping update, not logged in.',]);
    }

    if (!targetLatLng) return console.log(['At target, not moving player.',]);

    const distanceToTarget = distanceBetweenLatLngs(currentLatLng, targetLatLng);
    const timeTilTarget = distanceToTarget / speedMps;
    console.log(`Distance to target: ${distanceToTarget.toFixed(2)}m, time: ${timeTilTarget.toFixed(2)}s`);
    state.target.distanceToTarget = distanceToTarget;
    state.target.timeTilTarget = timeTilTarget;

    const distTraveledMeters = speedMps * (this._elapsedTimeSinceActMs / 1000);
    const closerLatLng = getLatLngAlong(currentLatLng, targetLatLng, distTraveledMeters / 1000);
    state.movement.currentLatLng = closerLatLng;

    const randomMeters = 8;
    const randomizedLatLng = randomLatLng(closerLatLng, randomMeters / 1000);

    client.playerUpdate(randomizedLatLng.lat, randomizedLatLng.lng)
      .then(() => {
        console.log('New player position:', [randomizedLatLng.lat, randomizedLatLng.lng]);
      });

    // Check if we reached the target
    if (distanceToTarget < POKESTOP_USAGE_RADIUS) {
      console.log(['reached target', targetFortId]);
      target.fortsHistory[targetFortId] = {
        ...target.fortsHistory[targetFortId],
        arrivedEpoch: Date.now(),
      };
      target.targetFortId = null;
    }
  }
}

const POKESTOP_SPIN_WAIT = 5 * 60 * 1000; // 5 mins
export class TargetObjectiveWorker extends TickWorker {
  getConfig() {
    return {
      actEvery: 2500,
    };
  }

  act() {
    const {client, state} = this;
    const {targetFortId, fortsHistory} = state.target;
    const {forts} = state.mapSummary;
    const {currentLatLng} = state.movement;

    if (targetFortId) return console.log(['Skipped Targeting, already heading to a fort']);
    if (!forts || !forts.length) return console.log(['Skipped Targeting, no forts in sight']);

    // Sort the forts by their distance to the player
    forts.forEach((fort) => {
      const fortLatLng = {lat: fort.latitude, lng: fort.longitude};
      fort.distanceToPlayer = distanceBetweenLatLngs(currentLatLng, fortLatLng);
    });
    forts.forEach((fort) => {
      const fortHistory = fortsHistory[fort.id];
      if (fortHistory) {
        const {arrivedEpoch} = fortHistory;
        const elapsedSinceArrived = Date.now() - arrivedEpoch;
        if (elapsedSinceArrived < POKESTOP_SPIN_WAIT) {
          return fort.score = -Infinity;
        }
      } else {
        fort.score = -fort.distanceToPlayer;
      }
    });

    const sortedForts = sortBy(forts, 'score').reverse();
    // sortedForts.forEach((fort, i) => {
    //   console.log(`${i}) ${fort.id} = ${fort.score}`);
    // });

    const closestFort = sortedForts[0];
    if (!closestFort) return;

    console.log(`Targeting closest fort, ${closestFort.distanceToPlayer}m away, score of ${closestFort.score}`);

    // Set the target
    state.target.targetFortId = closestFort.id;
    state.movement.targetLatLng = {lat: closestFort.latitude, lng: closestFort.longitude};
  }
}