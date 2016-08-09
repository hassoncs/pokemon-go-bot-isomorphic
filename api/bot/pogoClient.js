import pogobuf from 'pogobuf';
const env = require('../../env');

export default class PogoClient {
  constructor() {
    this.client = new pogobuf.Client();
    this.client.setMaxTries(1); // debugging!
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
    return this.client[name].apply(this.client, Array.from(args))
      .catch((error) => {
        console.log(`PogoClientWrapper caught an error!`.toString().red);
        console.error(error);
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