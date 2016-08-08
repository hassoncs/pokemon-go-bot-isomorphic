import _ from 'lodash';
import utils from './utils';
import groupBy from 'lodash/groupBy';
import keyBy from 'lodash/keyBy';

class PokemonPruner {
  prune(inventory) {

    // Print all candies
    const candiesByIndex = keyBy(inventory.candies, 'familyID');
    Object.keys(candiesByIndex).forEach(familyID => {
      const candy = candiesByIndex[familyID];
      const pokemonIndex = +familyID - 1;
      const pokedex = utils.getPokedexByPokemonIndex(pokemonIndex);
      console.log(`#${pokemonIndex}) ${candy.count}x ${pokedex.Name} Candies`);
    });

    // Loop through all pokemon seeing if we have enough candies to evolve any of them

    const pokemonsByIndex = groupBy(inventory.pokemons, 'pokemonIndex');
    const pokemonToEvolve = [];
    Object.keys(pokemonsByIndex).forEach(pokemonIndex => {
      const pokemons = pokemonsByIndex[pokemonIndex];
      const representativePokemon = pokemons[0];
      const count = pokemons.length;
      const pokedex = representativePokemon.pokedex;
      if (!pokedex) return;
      const name = pokedex.Name;
      // console.log(`${count}x ${name}`);

      const nextEvoReqs = pokedex['Next Evolution Requirements'];
      const requiredCandyCount = nextEvoReqs && nextEvoReqs.Amount || 0;
      const candy = candiesByIndex[+pokemonIndex + 1];
      const candyCount = candy && candy.count || 0;
      const pokemonIsCapableOfEvolving = (requiredCandyCount > 0);
      const canEvolve = (pokemonIsCapableOfEvolving && candyCount >= requiredCandyCount);

      if (!canEvolve) return; // console.log(`${name} needs ${requiredCandyCount}, but player only has ${candyCount}`);
      const evolvableCount = Math.min(
        count,
        Math.floor(candyCount / requiredCandyCount),
      );

      for (let i = 0; i < evolvableCount; ++i) {
        pokemonToEvolve.push(pokemonIndex);
      }

      // console.log(`${count}x ${name} #${pokemonIndex}`);
      const evolveStr = pokemonIsCapableOfEvolving ? `could evolve ${evolvableCount} of them` : 'Can\'t evolve';
      console.log(`${count}x ${name} (${candyCount} candies) (${evolveStr})`);
    });

    return {
      pokemonToEvolve
    };
  }
}

export default new PokemonPruner();
