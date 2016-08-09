import TickWorker from './TickWorker';
import pogobuf from 'pogobuf';
const env = require('../../../env');

const client = new pogobuf.Client();

export default class LoginWorker extends TickWorker {
  getConfig() {
    const {state} = this;
    return {
      needsLogIn: false,
      actEvery: state.loggedIn ? 10 * 60 * 1000 : 30 * 1000, // 10 mins or 30 seconds
    };
  }

  act() {
    const {state} = this;
    state.loggedIn = false;

    console.log(`Logging in...`.toString().yellow);
    this.bot.pauseUntil(new Promise(resolve => {
      const login = this.getLogin();
      login.login(env.username, env.password)
        .then(token => {
          console.log(`Got login token!`.toString().green);
          console.log(`Connecting to PokemonGo server...`.toString().yellow);

          const latLng = state.movement.currentLatLng;
          this.bot.params.client = client;
          this.bot.updateWorkers();

          client.setAuthInfo(env.loginProvider, token);
          client.setPosition(latLng.lat, latLng.lng);
          client.setMaxTries(1); // debugging!
          return client.init();
        })
        .then(() => {
          console.log('Logged in!'.green);
          state.loggedIn = true;
          resolve();
        })
        .catch((e) => {
          console.log('Failed to log in. Trying again soon.'.red);
          console.log(e.toString().red);
          state.loggedIn = false;
          resolve();
        });
    }));
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
}
