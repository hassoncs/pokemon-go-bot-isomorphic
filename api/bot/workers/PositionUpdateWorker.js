import TickWorker from './TickWorker';
import logUtils from '../utils/logUtils';

import {
  distanceBetweenLatLngs,
  getLatLngAlong,
  randomLatLng,
} from '../utils/geo';
import Item from "../models/Item";

const pokestopUsageRadius = 5;
const waitBeforeSpinningPokestop = 3000;

export default class PositionUpdateWorker extends TickWorker {
  getConfig() {
    return {
      actEvery: 1000,
    };
  }

  act() {
    const {state} = this;
    const {targetFortId} = state.target;
    const {currentLatLng, targetLatLng, speedMps} = state.movement;

    if (!targetFortId || !targetLatLng) return; // console.log('At target, not moving player.');

    const distanceToTarget = distanceBetweenLatLngs(currentLatLng, targetLatLng);
    const timeTilTarget = distanceToTarget / speedMps;

    state.target.distanceToTarget = distanceToTarget;
    state.target.timeTilTarget = timeTilTarget;

    // Check if we reached the target
    if (distanceToTarget <= pokestopUsageRadius) {
      this.spinFort();
    } else {
      console.log(`Heading to Pokestop ${distanceToTarget.toFixed(0)}m away. ETA: ${timeTilTarget.toFixed(0)}s`);
      this.moveTowardsFort();
    }
  }

  moveTowardsFort() {
    const {state} = this;
    const {currentLatLng, targetLatLng, speedMps} = state.movement;
    const distTraveledMeters = speedMps * (this._elapsedTimeSinceActMs / 1000);
    const distanceMeters = Math.min(state.target.distanceToTarget, distTraveledMeters);
    const closerLatLng = getLatLngAlong(currentLatLng, targetLatLng, distanceMeters);
    state.movement.currentLatLng = closerLatLng;
  }

  spinFort() {
    const {client, state} = this;
    const {targetFortId, fortsHistory} = state.target;
    const {fortsByIds} = state.mapSummary;
    const fort = fortsByIds[targetFortId];
    if (!fort) return;

    if (Date.now() - fort.arrivedEpoch < 30 * 1000) {
      return console.log(`This pokestop has been spun too recently. Skipping.`.toString().yellow);
    }

    fortsHistory[targetFortId] = {
      ...fortsHistory[targetFortId],
      arrivedEpoch: Date.now(),
    };

    console.log(`Spinning pokestop ${fort.details && fort.details.name}`);
    this.bot.pauseUntil(new Promise(resolve => {
      client.fortSearch(fort.id, fort.latitude, fort.longitude)
        .then((searchDetails) => {
          state.target.targetFortId = null;

          setTimeout(resolve, 0);
          const xp = searchDetails.experience_awarded;
          if (searchDetails.result === 0) return console.log(`Pokestop search failed, try again later :(`.toString().red);
          if (searchDetails.result === 1) {
            console.log(`Pokestop search successful`.toString().green);
            state.softBanned = (xp === 0);
            if (state.softBanned) console.log(`Oh no! You appear to be soft-banned!`.toString().red);
          }
          if (searchDetails.result === 2) return console.log(`Pokestop out of range`.toString().red);
          if (searchDetails.result === 3) return console.log(`Pokestop on cooldown`.toString().red);
          if (searchDetails.result === 4) console.log(`Pokestop search successful, but inventory is full`.toString().green);

          // console.log(`searchDetails ${JSON.stringify(searchDetails.items_awarded)}`);
          const localItems = searchDetails.items_awarded.map(Item.fromRemoteItem);
          console.log(`  ${xp} xp`.toString().green);
          logUtils.logItems(localItems, 'green');

          state.inventory.deltaItems(localItems);

          const last = {xp, items: localItems};
          state.target.last = last;
          // console.log(`Done Spinning fort ${fort.details.name}`, last);
          state.target.targetFortId = null;
        }, resolve).catch(resolve);
    }));
  }
}
