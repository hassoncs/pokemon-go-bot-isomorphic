import TickWorker from './TickWorker';
import pogobuf from 'pogobuf';
const env = require('../../../env');
const login = new pogobuf.PTCLogin();

export default class LoginWorker extends TickWorker {
  getConfig() {
    return {
      needsLogIn: false,
      actEvery: 30 * 60 * 10000, // 30 mins
    };
  }

  act() {
    const {client, state} = this;

    login.login(env.username, env.password)
      .then(token => {
        const latLng = state.movement.currentLatLng;
        client.setAuthInfo('ptc', token);
        client.setPosition(latLng.lat, latLng.lng);
        client.setMaxTries(1); // debugging!
        return client.init();
      })
      .then(() => {
        console.log(['Logged in!']);
        state.loggedIn = true;
      });
  }
}
