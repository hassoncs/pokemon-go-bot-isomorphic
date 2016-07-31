import TickWorker from './TickWorker';
import jsonfile from 'jsonfile';

export default class StateSaveWorker extends TickWorker {
  getConfig() {
    return {
      actEvery: 1000,
    };
  }

  act() {
    const {state} = this;
    const STATE_FILE_NAME = '/tmp/pogobot-state.json';
    jsonfile.writeFile(STATE_FILE_NAME, state, function (err) {
      if (err) console.error(['Failed to save state: ' + err,
        state]);
    })
  }
}