import TickWorker from './TickWorker';
import jsonfile from 'jsonfile';

export default class StatsSummaryWorker extends TickWorker {
  getConfig() {
    return {
      needsLogIn: false,
      actEvery: 20000,
    };
  }

  act() {
    const avgXPPerHour = this.stats.xpPerHour.average;

    console.log(`Averaging ${(avgXPPerHour).toFixed().green} xp per hour`);

    if (!this.state.inventory.player) return;
    const {currentLevelXP, xpNeededForNextLevel} = this.state.inventory.player;

    const xpNeeded = xpNeededForNextLevel - currentLevelXP;
    const hoursTilNextLevel = xpNeeded / avgXPPerHour;
    console.log(`Level up in ${(hoursTilNextLevel * 60).toFixed(0)} minutes`);
  }
}