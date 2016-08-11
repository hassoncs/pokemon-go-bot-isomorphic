import TickWorker from './TickWorker';
import sortBy from 'lodash/sortBy';
import pogobuf from 'pogobuf';
import async from 'async';
import POGOProtos from 'node-pogo-protos';
import {distanceBetweenLatLngs, randomLatLng} from '../utils/geo';
const colors = require('colors/safe');

const POKESTOP_SPIN_WAIT = 5 * 60 * 1000; // 5 mins

export default class PokestopTargetingWorker extends TickWorker {
  getConfig() {
    return {
      actEvery: 10 * 1000,
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
      fort.score = -fort.distanceToPlayer + 400; // 400 just to make it look nicer :P

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
    this.targetForts(sortedForts);
  }

  targetForts(forts) {
    const {state} = this;

    this.bot.pauseUntil(new Promise(resolve => {
      const data = {};
      async.whilst(
        (() => forts.length > 0 && (!data.fort || data.fort.details.fortType === 'Gym')),
        (cb) => {
          const fort = data.fort = forts.shift();
          if (!fort) return cb();

          (fort.details ?
              Promise.resolve(fort.details) : this.getFortDetails(fort)
          ).then((details) => {
            fort.details = details;
            console.log(`Welcome to ${details.name}${details.description ? ', ' : ''}${details.description}`.toString().green);
          }).then(cb, cb);
        },
        () => {
          if (!data.fort) return resolve();
          const {fort} = data;
          console.log(`Targeting closest pokestop, ${fort.distanceToPlayer.toFixed(2)}m away, score of ${fort.score.toFixed(0)}`);

          // Set the target
          state.target.targetFortId = fort.id;
          state.movement.targetLatLng = {lat: fort.latitude, lng: fort.longitude};
          resolve();
        });
    }));
  }

  getFortDetails(fort) {
    const {client} = this;
    console.log(`Getting pokestop details ${fort.id}`);
    return client.fortDetails(fort.id, fort.latitude, fort.longitude)
      .then((details) => {
        if (!details) return Promise.reject();

        const fortType = pogobuf.Utils.getEnumKeyByValue(POGOProtos.Map.Fort.FortType, details.type);
        details.fortType = fortType;
        return Promise.resolve(details);
      });
  }
}
