import TickWorker from './TickWorker';
import pogobuf from 'pogobuf';
import POGOProtos from 'node-pogo-protos';
import logUtils from '../utils/logUtils';
import utils from '../utils/utils';

import {
  distanceBetweenLatLngs,
  getLatLngAlong,
  randomLatLng,
} from '../utils/geo';

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
    const { state} = this;
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
      return console.log(`This fort has been spun too recently. Skipping.`.toString().yellow);
    }

    console.log(`Spinning fort with id '${fort.id}'`);
    this.bot.pause(2000);

    fortsHistory[targetFortId] = {
      ...fortsHistory[targetFortId],
      arrivedEpoch: Date.now(),
    };

    client.fortDetails(fort.id, fort.latitude, fort.longitude)
      .then((details) => {
        const fortType = pogobuf.Utils.getEnumKeyByValue(POGOProtos.Map.Fort.FortType, details.type);
        console.log(`At ${fortType} '${details.name}'`.toString().green);

        fort.details = details;
        fort.fortType = fortType;
        if (fort.fortType === 'Gym') {
          state.target.targetFortId = null;
          throw 'This is a gym, not spinning.'.yellow;
        }

        return new Promise((resolve) => {
          setTimeout(resolve, waitBeforeSpinningPokestop);
          this.bot.pause(waitBeforeSpinningPokestop);
        });
      })
      .then(() => {
        console.log(`Spinning fort ${fort.details.name}`);
        return client.fortSearch(fort.id, fort.latitude, fort.longitude);
      })
      .then((searchDetails) => {
        state.target.targetFortId = null;

        const xp = searchDetails.experience_awarded;
        if (searchDetails.result === 0) return console.log(`Fort search failed, try again later :(`.toString().red);
        if (searchDetails.result === 1) console.log(`Fort search successful`.toString().green);
        if (searchDetails.result === 2) return console.log(`Fort out of range`.toString().red);
        if (searchDetails.result === 3) return console.log(`Fort on cooldown`.toString().red);
        if (searchDetails.result === 4) console.log(`Fort search successful, but inventory is full`.toString().green);


        // console.log(`searchDetails ${JSON.stringify(searchDetails.items_awarded)}`);
        const localItems = utils.toLocalItems(searchDetails.items_awarded);
        console.log(`  ${xp} xp`.toString().green);
        logUtils.logItems(localItems, 'green');

        localItems.forEach(item => {
          utils.deltaItem(item.id, item.count, state.inventory);
        });

        const last = {xp, items: localItems};
        state.target.last = last;
        // console.log(`Done Spinning fort ${fort.details.name}`, last);
        state.target.targetFortId = null;
      })
      .catch((error) => {
        console.log(`Caught Fort error ${error}`);
        state.target.targetFortId = null;
      });
  }
}