import TickWorker from './TickWorker';
import pogobuf from 'pogobuf';
const env = require('../../../env');

export default class LoginWorker extends TickWorker {
  getConfig() {
    return {
      needsLogIn: false,
      actEvery: 30 * 60 * 1000, // 30 mins
    };
  }

  act() {
    const {client, state} = this;

    console.log(`LOGGING IN AGAIN`);
    const login = new pogobuf.PTCLogin();
    login.login(env.username, env.password)
      .then(token => {
        console.log(`GOT TOKEN ${token}`);

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
