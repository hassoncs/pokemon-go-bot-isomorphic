const colors = require('colors/safe');

export default class TickWorker {
  constructor({state, client}) {
    this.state = state;
    this.client = client;
    this._pausedTimeMs = 0;
    this._elapsedTimeSinceActMs = Infinity;
  }

  getConfig() {
    return {
      actEvery: 5000,
    };
  }

  didTick(elapsed) {
    if (this._pausedTimeMs > 0) {
      const newPausedTime = Math.max(0, this._pausedTimeMs - elapsed);
      const pausedTimeDelta = this._pausedTimeMs - newPausedTime;
      this._pausedTimeMs = newPausedTime;
      elapsed -= pausedTimeDelta;
      if (this._pausedTimeMs > 0) {
        return console.log(colors.yellow(
          `skiping tick, still paused for ${(this._pausedTimeMs / 1000).toFixed(1)}s`));
      }
    }

    this._elapsedTimeSinceActMs += elapsed;

    const {actEvery} = this.getConfig();
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
