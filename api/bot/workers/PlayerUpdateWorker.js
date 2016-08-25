import TickWorker from './TickWorker';
import {
  distanceBetweenLatLngs,
  randomLatLng,
} from '../utils/geo';
import { getElevation } from '../utils/elevation';

export default class PlayerUpdateWorker extends TickWorker {
  getConfig() {
    return {
      actEvery: 10000,
    };
  }

  act() {
    const {client, state} = this;
    const {currentLatLng} = state.movement;

    const randomMeters = 4;
    const randomizedLatLng = randomLatLng(currentLatLng, randomMeters / 1000);
    state.movement.randomizedLatLng = randomizedLatLng;

    getElevation(randomizedLatLng.lat, randomizedLatLng.lng)
      .then((elevation) => {
        client.setPosition(randomizedLatLng.lat, randomizedLatLng.lng, elevation);
        client.playerUpdate()
          .then(() => {
            console.log(`Set player position: (${randomizedLatLng.lat.toFixed(3)},${randomizedLatLng.lng.toFixed(3)}, ${elevation})`.toString().blue);
          });
      });
  }
}
