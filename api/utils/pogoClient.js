const pogobuf = require('pogobuf');
const s2 = require('s2geometry-node');
const env = require('../../env');
import jsonfile from 'jsonfile';
import extend from 'lodash/extend';

const client = new pogobuf.Client();

const initialLatLng = {lat: 37.758081, lng: -122.403862};
const s2LatLng = new s2.S2LatLng(initialLatLng.lat, initialLatLng.lng); // Bottom of home curvy hill
// const latLng = new s2.S2LatLng(37.808836, -122.410013); // Pier 39
// const latLng = new s2.S2LatLng(37.758735, -122.403586); // Home

const STATE_FILE_NAME = '/tmp/pogobot-state.json';

let prevState = null;
try {
  prevState = jsonfile.readFileSync(STATE_FILE_NAME, {throws: false});
} catch (error) {
}

const movement = extend({
  speedMps: 8.16, // human speed is 1.4 - 2.5
  currentLatLng: initialLatLng,
  targetLatLng: null,
}, prevState && prevState.movement);

const target = extend({
  targetFortId: null,
  fortsHistory: {},
}, prevState && prevState.target);

const state = extend({
  target,
  movement,
  inventory: {},
  mapSummary: {
    catchable_pokemons: [],
    decimated_spawn_points: [],
    fort_summaries: [],
    forts: [],
    nearby_pokemons: [],
    spawn_points: [],
    wild_pokemons: [],
  },
});

import LoginWorker from './workers/LoginWorker';
import StateSaveWorker from './workers/StateSaveWorker';
import MapSummaryWorker from './workers/MapSummaryWorker';
import TargetObjectiveWorker from './workers/TargetObjectiveWorker';
import PositionUpdateWorker from './workers/PositionUpdateWorker';
const TICK_INTERVAL = 1000;

class Bot {
  constructor({state, client}) {
    this.state = state;
    this.client = client;
  }

  start() {
    console.log(['Starting bot.',]);
    this._lastTickEpoch = Date.now();

    const {state, client} = this;
    this._workers = [
      new LoginWorker({state, client}),
      new PositionUpdateWorker({state, client}),
      new MapSummaryWorker({state, client}),
      new StateSaveWorker({state, client}),
      new TargetObjectiveWorker({state, client}),
    ];
    setTimeout(() => this.tick(), TICK_INTERVAL);
  }

  tick() {
    const elapsedMsSinceTick = Date.now() - this._lastTickEpoch;
    this._lastTickEpoch = Date.now();
    // console.log(['tick.', elapsedMsSinceTick]);

    // Update workers
    this._workers.forEach((worker) => worker.didTick(elapsedMsSinceTick));

    setTimeout(() => this.tick(), TICK_INTERVAL);
  }
}
;

const bot = new Bot({state, client});
bot.start();

const pogoClient = {
  state,
  client,
  s2LatLng,
  latLng: initialLatLng,
};

module.exports = pogoClient;
