import pogobuf from 'pogobuf';
import Pokemon from "./Pokemon";
import groupBy from 'lodash/groupBy';
import logUtils from '../utils/logUtils';
import levelXP from '../data/levelXP';
import Item from "./Item";

export default class Inventory {
  static fromRemoteInventory(rawInventory) {
    const splitInventory = pogobuf.Utils.splitInventory(rawInventory);
    return new Inventory(splitInventory);
  }

  constructor(splitInventory) {
    this.rawInventory = splitInventory;
    this.processUpgrades(this.rawInventory);
    this.processPlayer(this.rawInventory);
    this.processItems(this.rawInventory);
    this.processPokemon(this.rawInventory);
    this.processCandies(this.rawInventory);
    this.processAppliedItems(this.rawInventory);
    this.processEggIncubators(this.rawInventory);
  }

  processUpgrades(inventory) {
    this.maxItemCount = 350;
    this.maxPokemonCount = 250;

    const inventoryUpgrades = inventory.inventory_upgrades;
    inventoryUpgrades.forEach(({inventory_upgrades}) => {
      inventory_upgrades.forEach(({upgrade_type, additional_storage}) => {
        if (upgrade_type === 1) {
          this.maxItemCount += additional_storage;
        } else if (upgrade_type === 2) {
          this.maxPokemonCount += additional_storage;
        }
      });
    });
  }

  processPlayer(inventory) {
    const playerData = inventory.player;
    const nextLevelXP = playerData.next_level_xp;
    const experience = playerData.experience;
    const previousLevel = ((this || {}).player || {}).level || 1;

    const leveledUp = (playerData.level > previousLevel);
    if (leveledUp) {
      console.log(`You leveled up! You are now level ${playerData.level}!`.toString().green);
    }

    const player = {
      experience,
      nextLevelXP,
      leveledUp,
      level: playerData.level,
      kmWalked: playerData.km_walked,
    };
    this.player = player;

    const levelIndex = playerData.level - 1;
    const levelData = levelXP[levelIndex];
    const totalXPForCurrentLevel = levelData.xpTotal;
    const currentLevelXP = experience - totalXPForCurrentLevel;
    const xpNeededForNextLevel = nextLevelXP - totalXPForCurrentLevel;

    console.log(`${('Level ' + playerData.level.toFixed(0)).yellow}, \
${((currentLevelXP / xpNeededForNextLevel * 100).toFixed(1) + '%').green} to next level! (${currentLevelXP}/${xpNeededForNextLevel})`);
    //const xpNeededForMaxLevel = levelXP[levelXP.length - 1].xpTotal;
    //console.log(`${(experience / xpNeededForMaxLevel * 100).toFixed(1)}% to MAX level!`);
  }

  processItems(inventory) {
    const items = inventory.items.map(Item.fromRemoteItem);
    logUtils.logItems(items);

    const itemsById = {};
    items.map(item => itemsById[item.id] = item);

    this.items = items;
    this.itemsById = itemsById;

    let itemCount = 0;
    items.forEach(item => itemCount += item.count);
    this.itemCount = itemCount;

    console.log(`Player has ${itemCount}/${this.maxItemCount} items`.toString().green);
  }

  processPokemon(inventory) {
    const pokemons = inventory.pokemon;
    const localPokemons = pokemons.map(Pokemon.fromRemotePokemon);
    const localPokemonNoEggs = localPokemons.filter(p => !p.isEgg);
    const localPokemonEggs = localPokemons.filter(p => p.isEgg);

    this.pokemons = localPokemonNoEggs;
    this.eggs = localPokemonEggs;

    //const pokemonsByIndex = groupBy(localPokemons, 'pokemonIndex');
    // Object.keys(pokemonsByIndex).forEach(pokemonIndex => {
    //   const pokemons = pokemonsByIndex[pokemonIndex];
    // const count = pokemons.length;
    // const name = (pokemons[0].pokedex || {}).Name || 'Egg?';
    // console.log(`#${pokemonIndex}) ${count}x ${name}`);
    // });

    // Pokemon processing
    this.pokemonSummary = {
      count: localPokemons.length,
    };

    console.log(`Player has ${localPokemons.length}/${this.maxPokemonCount} Pokemon`.toString().green);
    console.log(`Player has ${localPokemonEggs.length}/9 Eggs`.toString().green);
  }

  processCandies(inventory) {
    const candies = inventory.candies.map(remoteCandy => {
      return {
        count: remoteCandy.candy,
        familyID: remoteCandy.family_id,
      };
    });

    this.candies = candies;

    // candies.forEach(candy => {
    //   console.log(`${candy.count}x ${candy.familyID}`);
    // });

    let candyCount = 0;
    candies.forEach(candy => candyCount += candy.count);

    console.log(`Player has ${candyCount} Candies`.toString().green);
  }

  processAppliedItems(inventory) {
    const appliedItems = [];
    inventory.applied_items.forEach((itemGroup) => {
      const items = itemGroup.item;
      const item = items[0];
      if (item.item_id !== 301) return console.log(`Skipping, not an egg`);

      const expireLong = item.expire_ms;
      const expirationDate = new Date(expireLong);
      const active = Date.now() <= expirationDate.getTime();
      if (active) appliedItems.push({...item, active});

      const activeStr = `active until ${expirationDate}`;
      console.log(`Lucky egg is ${active ? activeStr : 'expired'}`);
    });
    this.appliedItems = appliedItems;
  }

  processEggIncubators(inventory) {
    const {kmWalked} = this.player;
    this.eggIncubators = [];
    this.finishedEggIncubators = [];

    inventory.egg_incubators.forEach((incubatorStore) => {
      if (!incubatorStore) return;
      incubatorStore.egg_incubator.forEach((incubator) => {
        const {
          id,
          incubator_type,
          item_id,
          pokemon_id,
          start_km_walked,
          target_km_walked,
          uses_remaining
        } = incubator;
        const beingUsed = !!pokemon_id;
        let percentDone = 0;
        if (beingUsed) {
          const distanceFromStartKm = kmWalked - start_km_walked;
          const distanceFromTargetKm = target_km_walked - start_km_walked;
          percentDone = distanceFromStartKm / distanceFromTargetKm;
        }
        const localIncubator = {
          id,
          beingUsed,
          incubatorType: incubator_type,
          itemID: item_id,
          pokemonID: pokemon_id,
          percentDone: percentDone,
          startKmWalked: start_km_walked,
          targetKmWalked: target_km_walked,
          usesRemaining: item_id === 901 ? Infinity : uses_remaining,
        };
        this.eggIncubators.push(localIncubator);
        if (percentDone >= 1) this.finishedEggIncubators.push(localIncubator);
      });
    });

    const incubators = this.eggIncubators;
    const usedIncubators = incubators.filter(incubator => !!incubator.pokemonID);
    console.log(`${incubators.length} egg incubators, ${usedIncubators.length} are in use.`);
    incubators.forEach((incubator, i) => {
      const {usesRemaining, percentDone, pokemonID} = incubator;
      const beingUsed = !!incubator.pokemonID;
      let useString = `Unused.`;
      if (beingUsed) {
        const percentDoneStr = (percentDone * 100).toFixed(1) + '%';
        useString = `Incubating ${pokemonID}, ${percentDoneStr} hatched`;
      }
      console.log(`${i}) ${usesRemaining} uses left. ${useString}`);
    });
  }
}