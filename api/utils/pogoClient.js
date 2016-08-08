const pogobuf = require('pogobuf');
const env = require('../../env');
import jsonfile from 'jsonfile';
import extend from 'lodash/extend';
const colors = require('colors/safe');

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
    encounters: [],
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
  constructor({state}) {
    this.state = state;
  }

  start() {
    console.log(colors.red('Starting bot.'));
    this._lastTickEpoch = Date.now();

    const {state} = this;
    this.params = {state, bot: this};
    this._workers = [
      new LoginWorker(this.params),
      new PlayerUpdateWorker(this.params),
      new PositionUpdateWorker(this.params),
      new MapSummaryWorker(this.params),
      new StateSaveWorker(this.params),
      new TargetObjectiveWorker(this.params),
      new InventoryWorker(this.params),
      new PokemonCatchingWorker(this.params),
    ];
    setTimeout(() => this.tick(), TICK_INTERVAL);
  }

  tick() {
    const elapsedMsSinceTick = Date.now() - this._lastTickEpoch;
    this._lastTickEpoch = Date.now();
    // console.log(['tick.', elapsedMsSinceTick]);

    if (this.pausePromise) {
      // console.log(`Skipping tick, a worker locked the bot.`);
      setTimeout(() => this.tick(), TICK_INTERVAL);
      return;
    }

    // Update workers
    this._workers.forEach((worker) => worker.didTick(elapsedMsSinceTick));

    setTimeout(() => this.tick(), TICK_INTERVAL);
  }

  pause(duration) {
    this._lastTickEpoch += duration;
  }

  updateWorkers() {
    this._workers.forEach(worker => {
      worker.client = this.params.client;
    });
  }

  // Pause until this promise is resolved.
  pauseUntil(promise) {
    this.pausePromise = promise;
    promise.then(() => {
      // console.log(`Unlocking the bot clock.`);
      this.pausePromise = null;
    });
  }
}

const bot = new Bot({state});
bot.start();

const pogoClient = {
  state,
};

module.exports = pogoClient;
