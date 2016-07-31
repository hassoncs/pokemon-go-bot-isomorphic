import TickWorker from './TickWorker';
const pogobuf = require('pogobuf');
const POGOProtos = require('node-pogo-protos');

import {
  distanceBetweenLatLngs,
  getLatLngAlong,
  randomLatLng,
} from '../geo';

const POKESTOP_USAGE_RADIUS = 1;

export default class PositionUpdateWorker extends TickWorker {
  getConfig() {
    return {
      actEvery: 1000,
    };
  }

  act() {
    const {client, state} = this;
    const {targetFortId, fortsHistory} = state.target;
    const {fortsByIds} = state.mapSummary;
    const {currentLatLng, targetLatLng, speedMps} = state.movement;

    if (!fortsByIds) return console.log(`fortsByIds isn't ready`);

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
    if (targetFortId && distanceToTarget < POKESTOP_USAGE_RADIUS) {
      console.log(`Reached target fort ${targetFortId}`);

      const fort = fortsByIds[targetFortId];
      if (!fort) return;

      console.log(`Spinning fort with id '${fort.id}'`);

      fortsHistory[targetFortId] = {
        ...fortsHistory[targetFortId],
        arrivedEpoch: Date.now(),
      };

      client.fortDetails(fort.id, fort.latitude, fort.longitude)
        .then((details) => {
          const fortType = pogobuf.Utils.getEnumKeyByValue(POGOProtos.Map.Fort.FortType, details.type);
          console.log(`At fort '${details.name}', a ${fortType}`);
          fort.details = details;
          fort.fortType = fortType;
          if (fort.fortType === 'Gym') {
            state.target.targetFortId = null;
            throw 'This is a gym, not spinning.';
          }

          return new Promise((resolve) => {
            setTimeout(resolve, 15000);
            this.pause(15000);
            console.log(`waiting before spinning`);
          });
        })
        .then(() => {
          console.log(`Spinning fort ${fort.details.name}`);
          return client.fortSearch(fort.id, fort.latitude, fort.longitude);
        })
        .then((searchDetails) => {
          const fortSearchResult = pogobuf.Utils.getEnumKeyByValue(
            POGOProtos.Networking.Responses.FortSearchResponse.Result, searchDetails.result);

          console.log(`*** fortSearchResult '${fortSearchResult}'`.toString().green);
          state.target.targetFortId = null;

          const xp = searchDetails.experience_awarded;
          if (searchDetails.result === 0) return console.log(`Fort search failed, try again later :(`.toString().red);
          if (searchDetails.result === 1) console.log(`Fort search successful!`.toString().green);
          if (searchDetails.result === 2) return console.log(`Fort out of range!`.toString().red);
          if (searchDetails.result === 3) return console.log(`Fort on cooldown!`.toString().red);
          if (searchDetails.result === 4) console.log(`Fort search successful, but inventory is full!`.toString().green);

          const items = searchDetails.items_awarded.map((item) => {
            const name = pogobuf.Utils.getEnumKeyByValue(POGOProtos.Inventory.Item.ItemId, item.item_id);
            return {name, count: item.item_count};
          });
          const last = {xp, items};
          state.target.last = last;
          console.log(`Done Spinning fort ${fort.details.name}`, last);
          state.target.targetFortId = null;
        })
        .catch((error) => {
          console.log(`Caught Fort error ${error}`);
          state.target.targetFortId = null;
        });
    }
  }
}
