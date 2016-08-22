
export default class Statistics {
  constructor() {
    this.average = 0;
    this.points = [];
    this.windowDurationMs = 1 * 60 * 60 * 1000; // An hour in ms
  }

  logEvent(value) {
    const epoch = Date.now();
    this.points.push({
      epoch,
      value,
    });

    // Check the first value to see if it's passed the expiration
    const durationSinceEvent = epoch - this.points[0].epoch;
    if (durationSinceEvent >= this.windowDurationMs) {
      this.points.unshift();
    }

    this._recompute();
  }

  _recompute() {
    const valueTotal = this.points.reduce((sum, point) => {
      return sum + point.value;
    }, 0);

    // console.log(`total xp ${valueTotal}`);

    if (this.points.length >= 2) {
      const duration = this.points[this.points.length - 1].epoch - this.points[0].epoch;
      // console.log(`duration ms ${duration}`);
      this.average = valueTotal / duration * this.windowDurationMs;
    } else {
      this.average = valueTotal;
    }
  }
}