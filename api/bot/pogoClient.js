import pogobuf from 'pogobuf';
import async from 'async';
import once from 'lodash/once';
import Promise from 'bluebird';
const env = require('../../env');

export default class PogoClient {
  constructor({state}) {
    this.state = state;

    this.q = async.queue((task, cb) => {
      const onceCB = once(cb);
      const {name, args, resolve, reject} = task;

      const runTask = () => {
        this.client[name].apply(this.client, Array.from(args))
          .then((result) => {
            resolve(result);
            const areCallsWaiting = this.q.length() > 0;
            // if (areCallsWaiting) console.log(`PogoClient auto queuing calls! ${this.q.length()}`);
            setTimeout(onceCB, areCallsWaiting ? 3500 : 0);
          })
          .catch((error) => {
            console.log(`PogoClientWrapper caught an error calling '${name}'!`.toString().red);
            console.error(JSON.stringify(error));

            if (error.message === 'Status code 102 received from RPC') {
              this.login().then(runTask);
              const areCallsWaiting = this.q.length() > 0;
              return setTimeout(onceCB, areCallsWaiting ? 3500 : 0);
            } else {
              onceCB();
              reject();
            }
          });
      };
      runTask();
    }, 1);

    this.login();
  }

  login() {
    return new Promise((resolve, reject) => {
      console.log(`Logging in...`.toString().yellow);

      this.client = new pogobuf.Client();
      this.client.setMaxTries(1); // debugging!

      const login = this.getLogin();
      login.login(env.username, env.password)
        .then(token => {
          console.log(`Got login token!`.toString().green);
          console.log(`Connecting to PokemonGo server...`.toString().yellow);

          const latLng = this.state.movement.currentLatLng;

          this.client.setAuthInfo(env.loginProvider, token);
          this.client.setPosition(latLng.lat, latLng.lng);
          return this.client.init();
        })
        .then(() => {
          console.log('Logged in!'.green);
          this.state.loggedIn = true;
          resolve();
        })
        .catch((e) => {
          console.log('Failed to log in. Trying again soon.'.red);
          console.log(JSON.stringify(e).toString().red);
          this.state.loggedIn = false;
          resolve();
        });
    });
  }

  getLogin() {
    if (env.loginProvider === 'google') {
      return new pogobuf.GoogleLogin();
    } else if (env.loginProvider === 'ptc') {
      return new pogobuf.PTCLogin();
    } else {
      console.error(`Unknown loginProvider '${env.loginProvider}'`);
    }
  }

  setPosition(lat, lng) {
    this.client.setPosition(lat, lng);
  }

  init() {
    return this.client.init();
  }

  delegate(name, args) {
    return new Promise((resolve, reject) => {
      this.q.push({name, args, resolve, reject});
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

  evolvePokemon() {
    return this.delegate('evolvePokemon', arguments);
  }

  fortDetails() {
    return this.delegate('fortDetails', arguments);
  }

  fortSearch() {
    return this.delegate('fortSearch', arguments);
  }

  getHatchedEggs() {
    return this.delegate('getHatchedEggs', arguments);
  }

  useItemEggIncubator() {
    return this.delegate('useItemEggIncubator', arguments);
  }
}
