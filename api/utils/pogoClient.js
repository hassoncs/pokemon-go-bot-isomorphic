const pogobuf = require('pogobuf');
const s2 = require('s2geometry-node');
const env = require('../../env');

const client = new pogobuf.Client();

const initialLatLng = { lat: 37.758081, lng: -122.403862 };
const s2LatLng = new s2.S2LatLng(initialLatLng.lat, initialLatLng.lng); // Bottom of home curvy hill
// const latLng = new s2.S2LatLng(37.808836, -122.410013); // Pier 39
// const latLng = new s2.S2LatLng(37.758735, -122.403586); // Home

const state = {
  movement: {
    currentLatLng: initialLatLng,
    desiredLatLng: initialLatLng,
  },
  inventory: {

  },
  mapSummary: {

  },
};

//   .then(() => {
//     console.log('LOGGING SUCCESS!');
//     const latLng = state.movement.currentLatLng;
//     return client.playerUpdate(latLng.lat, latLng.lng)
//   })
//   .then(() => {
//     const latLng = state.movement.currentLatLng;
//     console.log('PLAYER UPDATE SUCCESS!', [latLng.lat, latLng.lng]);
//   });


import {
  TickWorker,
  LoginWorker,
  PositionUpdateWorker,
} from './workers/TickWorker';
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
    ];
    setTimeout(() => this.tick(), TICK_INTERVAL);
  }

  tick() {
    const elapsedMsSinceTick = Date.now() - this._lastTickEpoch;
    this._lastTickEpoch = Date.now();
    console.log(['tick.', elapsedMsSinceTick]);

    // Update workers
    this._workers.forEach((worker) => worker.didTick(elapsedMsSinceTick));

    setTimeout(() => this.tick(), TICK_INTERVAL);
  }
};

const bot = new Bot({state, client});
bot.start();


const pogoClient = {
  client,
  s2LatLng,
  latLng: initialLatLng,
};

module.exports = pogoClient;
