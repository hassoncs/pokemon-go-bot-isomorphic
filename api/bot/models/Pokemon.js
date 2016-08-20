import pokemonList from '../data/pokemon';
import extend from 'lodash/extend';

export default class Pokemon {
  static fromRemotePokemon(remotePokemon) {
    const {
      id,
      cp,
      pokemon_id,
      individual_attack,
      individual_defense,
      individual_stamina,
      is_egg,
      move_1,
      move_2,
      cp_multiplier,
      stamina,
      stamina_max
    } = remotePokemon;

    const pokemonIndex = parseInt(pokemon_id, 10) - 1;
    return new Pokemon({
      id,
      cp,
      pokemonIndex,
      pokemonID: pokemon_id,
      individualAttack: individual_attack,
      individualDefense: individual_defense,
      individualStamina: individual_stamina,
      isEgg: is_egg,
      move1: move_1,
      move2: move_2,
      cpMultiplier: cp_multiplier,
      stamina,
      staminaMax: stamina_max,
    });
  }

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
