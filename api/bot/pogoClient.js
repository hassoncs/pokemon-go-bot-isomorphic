import pogobuf from 'pogobuf';
import async from 'async';
import Promise from 'bluebird';
const env = require('../../env');

export default class PogoClient {
  constructor() {
    this.client = new pogobuf.Client();
    this.client.setMaxTries(1); // debugging!

    this.q = async.queue((task, cb) => {
      const {name, args, resolve} = task;
      this.client[name].apply(this.client, Array.from(args))
        .then((result) => {
          resolve(result);
          const areCallsWaiting = this.q.length() > 0;
          if (areCallsWaiting) console.log(`PogoClient auto queuing calls! ${this.q.length()}`);
          setTimeout(cb, areCallsWaiting ? 2500 : 0);
        })
        .catch((error) => {
          console.log(`PogoClientWrapper caught an error!`.toString().red);
          console.error(error);
          cb();
        });
    }, 1);
  }

  setAuthInfo(token) {
    this.client.setAuthInfo(env.loginProvider, token);
  }

  setPosition(lat, lng) {
    this.client.setPosition(lat, lng);
  }

  init() {
    return this.client.init();
  }

  delegate(name, args) {
    return new Promise(resolve => {
      this.q.push({name, args, resolve});
    });
  }

  getInventory() {
    return this.delegate('getInventory', arguments);
  }

  useItemXPBoost() {
    return this.delegate('useItemXPBoost', arguments);
  }

  recycleInventoryItem() {
    return this.delegate('recycleInventoryItem', arguments);
  }

  releasePokemon() {
    return this.delegate('releasePokemon', arguments);
  }

  getMapObjects() {
    return this.delegate('getMapObjects', arguments);
  }

  playerUpdate() {
    return this.delegate('playerUpdate', arguments);
  }

  encounter() {
    return this.delegate('encounter', arguments);
  }

  catchPokemon() {
    return this.delegate('catchPokemon', arguments);
  }

  fortDetails() {
    return this.delegate('fortDetails', arguments);
  }

  fortSearch() {
    return this.delegate('fortSearch', arguments);
  }
}