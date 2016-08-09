import pokemonList from '../bot/data/pokemon';
import extend from 'lodash/extend';

export default class Pokemon {
  constructor(data) {
    extend(this, data);
    this.pokedex = pokemonList[this.pokemonIndex];
  }

  getIV() {
    const {individualAttack, individualDefense, individualStamina} = this;
    const percent = (
      individualAttack +
      individualDefense +
      individualStamina) / 45 * 100;
    return Math.round(percent);
  }
}
