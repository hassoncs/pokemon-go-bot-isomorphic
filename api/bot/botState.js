const pogobuf = require('pogobuf');
const env = require('../../env');
import jsonfile from 'jsonfile';
import extend from 'lodash/extend';
import Inventory from './models/Inventory';

const STATE_FILE_NAME = '/tmp/pogobot-state.json';

let prevState = null;
try {
  prevState = jsonfile.readFileSync(STATE_FILE_NAME, {throws: false});
} catch (error) {
}

const movement = extend({
  // Downtown L.A.: 34.049202, -118.245741
  //currentLatLng: {
  //  lat: 34.049202,
  //  lng: -118.245741
  //},
  // Santa Monica:
  // currentLatLng: {
  //   lat: 34.016567,
  //   lng: -118.488766
  // },
  // Chicago:
  // currentLatLng: {
  //   lat: 41.891737,
  //   lng: -87.627146
  // },
  // Home
  // currentLatLng: {
  //   lat: 37.758735,
  //   lng: -122.403586
  // },
  // Pier 39
  //currentLatLng: {
  // lat: 37.808836,
  // lng: -122.410013
  //},
  // Golden Gate Park Corner
  currentLatLng: {
    lat: 37.769455,
    lng: -122.510462
  },
  // Central Park
  // currentLatLng: {
  //  lat: 40.776910,
  //  lng: -73.969500
  // },
  targetLatLng: null,
}, prevState && prevState.movement);

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

const inventory = extend(new Inventory(),
  prevState && prevState.inventory);

const state = extend({
  target,
  movement,
  inventory,
  mapSummary,
  loggedIn: false,
});

module.exports = state;
