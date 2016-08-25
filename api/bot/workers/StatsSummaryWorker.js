import TickWorker from './TickWorker';
import jsonfile from 'jsonfile';

export default class StatsSummaryWorker extends TickWorker {
  getConfig() {
    return {
      needsLogIn: false,
      actEvery: 10 * 1000,
    };
  }

  act() {
    const pokemonPerHour = this.stats.pokemonPerHour.average;
    const avgXPPerHour = this.stats.xpPerHour.average;

    if (!this.state.inventory.player) return;
    const {currentLevelXP, xpNeededForNextLevel} = this.state.inventory.player;

    const xpNeeded = xpNeededForNextLevel - currentLevelXP;
    const hoursTilNextLevel = xpNeeded / avgXPPerHour;

    console.log(`Averaging ${(avgXPPerHour).toFixed().green} xp/hr\
 and ${(pokemonPerHour).toFixed().green} pokemon/hr.\
 Level up in ~${(hoursTilNextLevel * 60).toFixed(0)} minutes`);
  }
}
