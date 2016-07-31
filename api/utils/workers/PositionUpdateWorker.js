import TickWorker from './TickWorker';
import {
  distanceBetweenLatLngs,
  getLatLngAlong,
  randomLatLng,
} from '../geo';

const POKESTOP_USAGE_RADIUS = 8;

export default class PositionUpdateWorker extends TickWorker {
  getConfig() {
    return {
      actEvery: 1000,
    };
  }

  act() {
    const {client, state} = this;
    const {target} = state;
    const {targetFortId} = target;
    const {currentLatLng, targetLatLng, speedMps} = state.movement;

    if (!targetLatLng) return console.log(['At target, not moving player.',]);

    const distanceToTarget = distanceBetweenLatLngs(currentLatLng, targetLatLng);
    const timeTilTarget = distanceToTarget / speedMps;
    console.log(`Distance to target: ${distanceToTarget.toFixed(2)}m, time: ${timeTilTarget.toFixed(2)}s`);

    state.target.distanceToTarget = distanceToTarget;
    state.target.timeTilTarget = timeTilTarget;

    const distTraveledMeters = speedMps * (this._elapsedTimeSinceActMs / 1000);
    const closerLatLng = getLatLngAlong(currentLatLng, targetLatLng, distTraveledMeters / 1000);
    state.movement.currentLatLng = closerLatLng;

    // Check if we reached the target
    if (distanceToTarget < POKESTOP_USAGE_RADIUS) {
      console.log(['reached target', targetFortId]);
      target.fortsHistory[targetFortId] = {
        ...target.fortsHistory[targetFortId],
        arrivedEpoch: Date.now(),
      };
      target.targetFortId = null;
    }
  }
}
