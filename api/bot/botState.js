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
  currentLatLng: {
    lat: 37.808836,
    lng: -122.410013
  },
  targetLatLng: null,
}, prevState && prevState.movement, {
  // must be < 20kmph to hatch eggs?
  speedMps: 4.16, // human speed is 1.4 - 2.5?
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

module.exports = state;
