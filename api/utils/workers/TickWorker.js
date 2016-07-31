export default class TickWorker {
  constructor({state, client}) {
    this.state = state;
    this.client = client;
    this._elapsedTimeSinceActMs = Infinity;
  }

  getConfig() {
    return {
      actEvery: 5000,
    };
  }

  didTick(elapsed) {
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
}
