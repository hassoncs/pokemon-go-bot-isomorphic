const pogobuf = require('pogobuf');
const s2 = require('s2geometry-node');
const env = require('../../env');

const login = new pogobuf.PTCLogin();
const client = new pogobuf.Client();

const latLng = { lat: 37.758081, lng: -122.403862 };
const s2LatLng = new s2.S2LatLng(latLng.lat, latLng.lng); // Bottom of home curvy hill
// const latLng = new s2.S2LatLng(37.808836, -122.410013); // Pier 39
// const latLng = new s2.S2LatLng(37.758735, -122.403586); // Home

console.log('LOGGING IN!');
login.login(env.username, env.password)
  .then(token => {
    client.setAuthInfo('ptc', token);
    client.setPosition(latLng.lat, latLng.lng);

    // Uncomment the following if you want to see request/response information on the console
    // client.on('request', console.dir);
    // client.on('response', console.dir);

    return client.init();
  })
  .then(() => {
    console.log('LOGGING SUCCESS!');
    return client.playerUpdate(latLng.lat, latLng.lng)
  })
  .then(() => {
    console.log('PLAYER UPDATE SUCCESS!', [latLng.lat, latLng.lng]);
  });

const pogoClient = {
  client, latLng, s2LatLng
};

module.exports = pogoClient;
