import _ from 'lodash';
import utils from './utils';
import groupBy from 'lodash/groupBy';
import keyBy from 'lodash/keyBy';
import sortBy from 'lodash/sortBy';
import last from 'lodash/last';

class PokemonPruner {
  getPokemonToEvolve(inventory) {

    // Print all candies
    const candiesByIndex = keyBy(inventory.candies, 'familyID');
    // Object.keys(candiesByIndex).forEach(familyID => {
    //   const candy = candiesByIndex[familyID];
    //   const pokemonIndex = +familyID - 1;
    //   const pokedex = utils.getPokedexByPokemonIndex(pokemonIndex);
    //   console.log(`#${pokemonIndex}) ${candy.count}x ${pokedex.Name} Candies`);
    // });

    // Loop through all pokemon seeing if we have enough candies to evolve any of them

    const pokemonsByIndex = groupBy(inventory.pokemons, 'pokemonIndex');
    const pokemonToEvolve = [];

    // Reverse the list so we evolve pokemon to the highest evolutions first
    const reversedPokemonsByIndex = sortBy(Object.keys(pokemonsByIndex), (indexStr) => +indexStr).reverse();

    reversedPokemonsByIndex.forEach(pokemonIndex => {
      const pokemons = pokemonsByIndex[pokemonIndex];
      const cpSortedPokemons = sortBy(pokemons, 'cp').reverse();
      const representativePokemon = cpSortedPokemons[0];
      const count = cpSortedPokemons.length;
      const pokedex = representativePokemon.pokedex;
      if (!pokedex) return;

      // const name = pokedex.Name;
      // console.log(`${count}x ${name}`);

      const nextEvoReqs = pokedex['Next Evolution Requirements'];
      const nextEvos = pokedex['Next evolution(s)'] || [];
      const prevEvo = pokedex['Previous evolution(s)'] || [];
      const requiredCandyCount = nextEvoReqs && nextEvoReqs.Amount || 0;
      const candy = candiesByIndex[+pokemonIndex + 1];
      const candyCount = candy && candy.count || 0;
      const pokemonIsCapableOfEvolving = (requiredCandyCount > 0);
      const canEvolve = (pokemonIsCapableOfEvolving && candyCount >= requiredCandyCount);
      const isBasePokemon = (prevEvo.length === 0);

      let maxEvoCount = count;
      let shouldEvolve = isBasePokemon;
      const lastEvo = last(nextEvos);
      if (lastEvo) {
        //console.log(['Checking if we have a ', lastEvo.Name]);
        const allLastEvoPokemons = pokemonsByIndex[+lastEvo.Number - 1] || [];
        const hasAllInEvoChain = allLastEvoPokemons.length > 0;
        // console.log(['have last evo? ', hasAllInEvoChain]);

        if (!hasAllInEvoChain) {
          maxEvoCount = 1;
          shouldEvolve = true;
        }
      }

      // console.log(['shouldEvolve? ', shouldEvolve]);
      if (!canEvolve || !shouldEvolve) return; // console.log(`${name} needs ${requiredCandyCount}, but player only has ${candyCount}`);
      const evolvableCount = Math.min(
        maxEvoCount,
        Math.floor(candyCount / requiredCandyCount)
      );

      candiesByIndex[+pokemonIndex + 1] -= evolvableCount * requiredCandyCount;
      pokemonToEvolve.push.apply(pokemonToEvolve, cpSortedPokemons.slice(0, evolvableCount));

      // console.log(`${count}x ${name} #${pokemonIndex}`);
      // const evolveStr = pokemonIsCapableOfEvolving ? `could evolve ${evolvableCount} of them` : 'Can\'t evolve';
      // console.log(`${count}x ${name} (${candyCount} candies) (${evolveStr})`);
    });

    return pokemonToEvolve;
  }

  getPokemonToTransfer(inventory, maxTransferCP) {
    const pokemonsByIndex = groupBy(inventory.pokemons, 'pokemonIndex');

    const pokemonToEvolve = this.getPokemonToEvolve(inventory);
    const pokemonToEvolveByIndex = groupBy(pokemonToEvolve, 'pokemonIndex')

    const pokemonToRelease = [];
    Object.keys(pokemonsByIndex).forEach(pokemonIndex => {
      const pokemons = pokemonsByIndex[pokemonIndex];
      const cpSortedPokemons = sortBy(pokemons, 'cp').reverse();
      const ivSortedPokemons = sortBy(pokemons, (p) => p.getIV()).reverse();
      const representativePokemon = cpSortedPokemons[0];
      const pokedex = representativePokemon.pokedex;
      const count = cpSortedPokemons.length;
      if (!pokedex || count <= 1) return;

      const name = pokedex.Name;
      const pokemonHighestCP = cpSortedPokemons[0];
      const pokemonHighestIV = ivSortedPokemons[0];
      // console.log(`High CP ${pokemonHighestCP.cp}, high IV ${pokemonHighestIV.getIV()}`);

      const releaseEvolveLimitCount = pokemons.length - (pokemonToEvolveByIndex[pokemonIndex] || []).length; - 1
      const releasablePokemon = pokemons.filter((pokemon) => {
        return (pokemon !== pokemonHighestCP && pokemon !== pokemonHighestIV && pokemon.cp < maxTransferCP);
      }).slice(0, releaseEvolveLimitCount);

      if (releasablePokemon.length === 0) return;
      console.log(`Releasing ${releasablePokemon.length}/${pokemons.length} ${name} limit ${releaseEvolveLimitCount}`);

      pokemonToRelease.push.apply(pokemonToRelease, releasablePokemon);
    });
    return pokemonToRelease;
  }
}

export default new PokemonPruner();
