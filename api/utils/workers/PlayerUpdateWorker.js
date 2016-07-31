import TickWorker from './TickWorker';
import {
  distanceBetweenLatLngs,
  getLatLngAlong,
  randomLatLng,
} from '../geo';

export default class PlayerUpdateWorker extends TickWorker {
  getConfig() {
    return {
      actEvery: 5000,
    };
  }

  act() {
    const {client, state} = this;
    const {currentLatLng} = state.movement;

    const randomMeters = 4;
    const randomizedLatLng = randomLatLng(currentLatLng, randomMeters / 1000);

    if (!client.endpoint || this._elapsedTimeSinceActMs === Infinity) {
      return console.log(['Skipping update, not logged in.',]);
    }

    client.playerUpdate(randomizedLatLng.lat, randomizedLatLng.lng)
      .then(() => {
        console.log('New player position:', [randomizedLatLng.lat, randomizedLatLng.lng]);
      });
  }
}
