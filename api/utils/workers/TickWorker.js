const pogobuf = require('pogobuf');
const login = new pogobuf.PTCLogin();
const env = require('../../../env');

export class TickWorker {
  constructor({state, client}) {
    this.state = state;
    this.client = client;
    this._elapsedTimeSinceActMs = 0;
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
    const {currentLatLng, targetLatLng, speedMps} = state.movement;

    if (!client.endpoint) {
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

function distanceBetweenLatLngs(latLngA, latLngB) {
  const featureA = latLngToFeaturePoint(latLngA);
  const featureB = latLngToFeaturePoint(latLngB);
  return turf.distance(featureA, featureB, 'kilometers') * 1000;
}

function latLngToFeaturePoint(latLng) {
  return {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [latLng.lng, latLng.lat],
    }
  };
}

function getLatLngAlong(sourceLatLng, destLatLng, distance) {
  const line = latLngsToFeatureLine(sourceLatLng, destLatLng);
  const along = turf.along(line, distance, 'kilometers');
  return featureToLatLng(along);
}

function latLngsToFeatureLine(latLngA, latLngB) {
  return {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [latLngA.lng, latLngA.lat],
        [latLngB.lng, latLngB.lat],
      ],
    }
  };
}

function featureToLatLng(feature) {
  var coordinates = feature.geometry.coordinates;
  return {lat: coordinates[1], lng: coordinates[0]};
}

function randomLatLng(latLng, distance) {
  const feature = latLngToFeaturePoint(latLng);
  const bearing = Math.random() * 360 - 180;
  const destination = turf.destination(feature, distance, bearing, 'kilometers');
  return featureToLatLng(destination);
}
