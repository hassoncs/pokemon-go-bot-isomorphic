import TickWorker from './TickWorker';
import pogobuf from 'pogobuf';
const env = require('../../../env');

export default class LoginWorker extends TickWorker {
  getConfig() {
    const {state} = this;
    return {
      needsLogIn: false,
      actEvery: state.loggedIn ? 10 * 60 * 1000 : 30 * 1000, // 30 mins or 30 seconds
    };
  }

  act() {
    const {state} = this;

    console.log(`Logging in...`.toString().yellow);
    this.bot.pause(this.getConfig().actEvery);

    const login = new pogobuf.PTCLogin();
    login.login(env.username, env.password)
      .then(token => {
        console.log(`Got login token ${token}`.toString().green);
        console.log(`Connecting to PokemonGo server...`.toString().yellow);

        const latLng = state.movement.currentLatLng;
        const client = new pogobuf.Client();
        this.bot.params.client = client;
        this.bot.updateWorkers();

        client.setAuthInfo('ptc', token);
        client.setPosition(latLng.lat, latLng.lng);
        client.setMaxTries(1); // debugging!
        return client.init();
      })
      .then(() => {
        console.log('Logged in!'.green);
        state.loggedIn = true;
      })
      .catch((e) => {
        console.log('Failed to log in. Trying again soon.'.red);
        console.log(e.toString().red);
        state.loggedIn = false;
      });
  }
}
