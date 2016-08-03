const pogobuf = require('pogobuf');
const env = require('../../env');
import jsonfile from 'jsonfile';
import extend from 'lodash/extend';
const colors = require('colors/safe');

const client = new pogobuf.Client();

// const s2LatLng = new s2.S2LatLng(initialLatLng.lat, initialLatLng.lng); // Bottom of home curvy hill
// const latLng = new s2.S2LatLng(37.808836, -122.410013); // Pier 39
// const latLng = new s2.S2LatLng(37.758735, -122.403586); // Home

const STATE_FILE_NAME = '/tmp/pogobot-state.json';

let prevState = null;
try {
  prevState = jsonfile.readFileSync(STATE_FILE_NAME, {throws: false});
} catch (error) {
}

const movement = extend({
  currentLatLng: {lat: 37.808836, lng: -122.410013},
  targetLatLng: null,
}, prevState && prevState.movement, {
  speedMps: 4.16, // human speed is 1.4 - 2.5
});

const target = extend({
  fortsHistory: {},
}, prevState && prevState.target);

const state = extend({
  target,
  movement,
  inventory: {
    items: [],
    itemsById: {},
  },
  mapSummary: {
    decimated_spawn_points: [],
    fort_summaries: [],
    forts: [],
    pokemons: [],
    spawn_points: [],
    wild_pokemons: [],
    fortsByIds: {},
  },
  loggedIn: false,
});

import LoginWorker from './workers/LoginWorker';
import StateSaveWorker from './workers/StateSaveWorker';
import MapSummaryWorker from './workers/MapSummaryWorker';
import TargetObjectiveWorker from './workers/TargetObjectiveWorker';
import PlayerUpdateWorker from './workers/PlayerUpdateWorker';
import PositionUpdateWorker from './workers/PositionUpdateWorker';
import InventoryWorker from './workers/InventoryWorker';
import PokemonCatchingWorker from './workers/PokemonCatchingWorker';
const TICK_INTERVAL = 1000;

class Bot {
  constructor({state, client}) {
    this.state = state;
    this.client = client;
  }

  start() {
    console.log(colors.red('Starting bot.'));
    this._lastTickEpoch = Date.now();

    const {state, client} = this;
    this._workers = [
      new LoginWorker({state, client}),
      new PlayerUpdateWorker({state, client}),
      new PositionUpdateWorker({state, client}),
      new MapSummaryWorker({state, client}),
      new StateSaveWorker({state, client}),
      new TargetObjectiveWorker({state, client}),
      new InventoryWorker({state, client}),
      new PokemonCatchingWorker({state, client}),
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

const bot = new Bot({state, client});
bot.start();

const pogoClient = {
  state,
  client,
};

module.exports = pogoClient;
