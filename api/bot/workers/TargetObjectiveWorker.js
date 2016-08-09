import TickWorker from './TickWorker';
import sortBy from 'lodash/sortBy';
const colors = require('colors/safe');

import {
  distanceBetweenLatLngs,
  randomLatLng,
} from '../utils/geo';

const POKESTOP_SPIN_WAIT = 5 * 60 * 1000; // 5 mins

export default class TargetObjectiveWorker extends TickWorker {
  getConfig() {
    return {
      actEvery: 10000,
    };
  }

  act() {
    const {state} = this;
    const {targetFortId, fortsHistory} = state.target;
    const {forts} = state.mapSummary;
    const {currentLatLng} = state.movement;

    if (targetFortId) return;// console.log(['Skipped Targeting, already heading to a fort']);
    if (!forts || !forts.length) return;// console.log(['Skipped Targeting, no forts in sight']);

    // Sort the forts by their distance to the player
    forts.forEach((fort) => {
      const fortLatLng = {lat: fort.latitude, lng: fort.longitude};
      fort.distanceToPlayer = distanceBetweenLatLngs(currentLatLng, fortLatLng);
    });
    forts.forEach((fort) => {
      fort.score = -fort.distanceToPlayer;

      const fortHistory = fortsHistory[fort.id];
      if (fortHistory) {
        const {arrivedEpoch} = fortHistory;
        const elapsedSinceArrived = Date.now() - arrivedEpoch;
        if (elapsedSinceArrived < POKESTOP_SPIN_WAIT * 2) {
          return fort.score = -Infinity;
        }
      }
    });

    const sortedForts = sortBy(forts, 'score').reverse();
    // sortedForts.forEach((fort, i) => {
    //   console.log(`${i}) ${fort.id} = ${fort.score}`);
    // });

    const closestFort = sortedForts[0];
    if (!closestFort) return;

    console.log(`Targeting closest fort, ${closestFort.distanceToPlayer.toFixed(2)}m away, score of ${closestFort.score}`);

    // Set the target
    state.target.targetFortId = closestFort.id;
    state.movement.targetLatLng = {lat: closestFort.latitude, lng: closestFort.longitude};
  }
}
