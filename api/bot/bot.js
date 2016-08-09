const pogobuf = require('pogobuf');
const env = require('../../env');
const colors = require('colors/safe');
import LoginWorker from './workers/LoginWorker';
import StateSaveWorker from './workers/StateSaveWorker';
import MapSummaryWorker from './workers/MapSummaryWorker';
import TargetObjectiveWorker from './workers/TargetObjectiveWorker';
import PlayerUpdateWorker from './workers/PlayerUpdateWorker';
import PositionUpdateWorker from './workers/PositionUpdateWorker';
import InventoryWorker from './workers/InventoryWorker';
import PokemonCatchingWorker from './workers/PokemonCatchingWorker';
import PogoClient from './pogoClient';

const TICK_INTERVAL = 1000;

class Bot {
  constructor({state}) {
    this.state = state;
    this.client = new PogoClient();
  }

  start() {
    console.log(colors.red('Starting bot.'));
    this._lastTickEpoch = Date.now();

    const {client, state} = this;
    this.params = {client, state, bot: this};
    this._workers = [
      new LoginWorker(this.params),
      new PlayerUpdateWorker(this.params),
      new PositionUpdateWorker(this.params),
      new MapSummaryWorker(this.params),
      new StateSaveWorker(this.params),
      new TargetObjectiveWorker(this.params),
      new InventoryWorker(this.params),
      new PokemonCatchingWorker(this.params),
    ];
    setTimeout(() => this.tick(), TICK_INTERVAL);
  }

  tick() {
    const elapsedMsSinceTick = Date.now() - this._lastTickEpoch;
    this._lastTickEpoch = Date.now();
    // console.log(['tick.', elapsedMsSinceTick]);

    if (this.pausePromise) {
      // console.log(`Skipping tick, a worker locked the bot.`);
      setTimeout(() => this.tick(), TICK_INTERVAL);
      return;
    }

    // Update workers
    this._workers.forEach((worker) => worker.didTick(elapsedMsSinceTick));

    setTimeout(() => this.tick(), TICK_INTERVAL);
  }

  pause(duration) {
    this._lastTickEpoch += duration;
  }

  // Pause until this promise is resolved.
  pauseUntil(promise) {
    this.pausePromise = promise;
    promise.then(() => {
      // console.log(`Unlocking the bot clock.`);
      this.pausePromise = null;
    });
  }
}

module.exports = Bot;
