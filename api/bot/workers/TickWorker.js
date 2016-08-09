const colors = require('colors/safe');

const defaultConfig = {
  actEvery: 5000,
  needsLogIn: true,
};

export default class TickWorker {
  constructor({state, client, bot}) {
    this.bot = bot;
    this.state = state;
    this.client = client;
    this._pausedTimeMs = 0;
    this._elapsedTimeSinceActMs = Infinity;
  }

  getConfig() {
    return {};
  }

  didTick(elapsed) {
    if (this._pausedTimeMs > 0) {
      const newPausedTime = Math.max(0, this._pausedTimeMs - elapsed);
      const pausedTimeDelta = this._pausedTimeMs - newPausedTime;
      this._pausedTimeMs = newPausedTime;
      elapsed -= pausedTimeDelta;
      // if (this._pausedTimeMs > 0) {
      //   return console.log(`skiping tick, still paused for ${(this._pausedTimeMs / 1000).toFixed(1)}s`);
      // }
    }

    this._elapsedTimeSinceActMs += elapsed;

    const {actEvery, needsLogIn} = {...defaultConfig, ...this.getConfig()};
    if (needsLogIn && !this.state.loggedIn) {
      return; // console.log(['Worker skipping tick, not logged in...',]);
    }

    if (actEvery <= this._elapsedTimeSinceActMs) {
      this.act();
      this._elapsedTimeSinceActMs = 0;
    }
  }

  act() {
    console.log(['Worker act',]);
  }

  pause(duration) {
    this._pausedTimeMs += duration;
  }
}
