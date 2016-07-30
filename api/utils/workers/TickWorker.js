const pogobuf = require('pogobuf');
const login = new pogobuf.PTCLogin();
const env = require('../../../env');

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
      this._elapsedTimeSinceActMs = 0;
      this.act();
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


import turf from 'turf';
export class PositionUpdateWorker extends TickWorker {
  getConfig() {
    return {
      actEvery: 5000,
    };
  }

  act() {
    console.log(['PositionUpdateWorker act',]);
    const {client, state} = this;
    const latLng = state.movement.currentLatLng;

    if (!client.endpoint) {
      return console.log(['SKipping update, not logged in.',]);
    }

    const randomMeters = 10;
    const randomizedLatLng = randomLatLng(latLng, randomMeters / 1000);

    client.playerUpdate(randomizedLatLng.lat, randomizedLatLng.lng)
      .then(() => {
        console.log('PLAYER UPDATE SUCCESS!', [randomizedLatLng.lat, randomizedLatLng.lng]);
      });
  }
}

function latLngToFeature(latLng) {
  return {
    "type": "Feature",
    "properties": {
      "marker-color": "#0f0"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [latLng.lat, latLng.lng],
    }
  };
}

function featureToLatLng(feature) {
  var coordinates = feature.geometry.coordinates;
  return {lat: coordinates[0], lng: coordinates[1] };
}

function randomLatLng(latLng, distance) {
  const feature = latLngToFeature(latLng);
  const bearing = Math.random() * 360 - 180;
  const destination = turf.destination(feature, distance, bearing, 'kilometers');
  return featureToLatLng(destination);
}
