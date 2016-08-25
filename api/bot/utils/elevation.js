import https from 'https';
import env from '../../../env';

module.exports = {
  getElevation: (lat, lng) => {
    if (!env.googleMapsAPIKey) return Promise.resolve(10);

    const host = `https://maps.googleapis.com`;
    const path = `/maps/api/elevation/json?locations=${lat},${lng}&key=${env.googleMapsAPIKey}`;
    const url = `${host}${path}`;

    return new Promise((resolve) => {
      https.get(url, (res) => {
        res.on('data', (data) => {
          const body = JSON.parse(data);
          const {results} = body;
          const elevation = results[0].elevation;
          resolve(elevation);
        });
        res.resume();
      });
    });
  }
};
