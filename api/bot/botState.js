const pogobuf = require('pogobuf');
const env = require('../../env');
import jsonfile from 'jsonfile';
import extend from 'lodash/extend';

const STATE_FILE_NAME = '/tmp/pogobot-state.json';

let prevState = null;
try {
  prevState = jsonfile.readFileSync(STATE_FILE_NAME, {throws: false});
} catch (error) {
}

const movement = extend({
// const s2LatLng = new s2.S2LatLng(initialLatLng.lat, initialLatLng.lng); // Bottom of home curvy hill
// const latLng = new s2.S2LatLng(37.808836, -122.410013); // Pier 39
// const latLng = new s2.S2LatLng(37.758735, -122.403586); // Home
  // Downtown L.A.: 34.049202, -118.245741
  //currentLatLng: {
  //  lat: 34.049202,
  //  lng: -118.245741
  //},
  // Santa Monica:
  currentLatLng: {
    lat: 34.016567,
    lng: -118.488766
  },
  //currentLatLng: {
  //  lat: 37.808836,
  //  lng: -122.410013
  //},
  targetLatLng: null,
}, prevState && prevState.movement, {
  // must be < 20kmph to hatch eggs?
  speedMps: 8.5, // human speed is 1.4 - 2.5?
});

const target = extend({
  fortsHistory: {},
}, prevState && prevState.target);

const mapSummary = extend({
  forts: [],
  fortsByIds: {},
  fort_summaries: [],
}, prevState && prevState.mapSummary, {
  encounters: [],
  spawn_points: [],
  wild_pokemons: [],
  decimated_spawn_points: [],
});

const state = extend({
  target,
  movement,
  inventory: {
    items: [],
    itemsById: {},
  },
  mapSummary,
  loggedIn: false,
});

module.exports = state;
