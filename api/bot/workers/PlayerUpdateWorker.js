import TickWorker from './TickWorker';
import {
  distanceBetweenLatLngs,
  randomLatLng,
} from '../utils/geo';

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
    state.movement.randomizedLatLng = randomizedLatLng;

    client.setPosition(randomizedLatLng.lat, randomizedLatLng.lng);
    client.playerUpdate(randomizedLatLng.lat, randomizedLatLng.lng)
      .then(() => {
        console.log(`Setting player position: (${randomizedLatLng.lat.toFixed(3)},${randomizedLatLng.lng.toFixed(3)})`.toString().blue);
      });
  }
}
