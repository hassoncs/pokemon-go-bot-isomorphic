import TickWorker from './TickWorker';
import pogobuf from 'pogobuf';
import POGOProtos from 'node-pogo-protos';
import utils from '../utils/utils';
import logUtils from '../utils/logUtils';
import groupBy from 'lodash/groupBy';
import some from 'lodash/some';
import InventoryPruner from '../utils/InventoryPruner';
import PokemonPruner from '../utils/PokemonPruner';
import async from 'async';
import jsonfile from 'jsonfile';
import Long from 'long';
import Promise from 'bluebird';
import levelXP from '../data/levelXP';
const env = require('../../../env');

const delayBetweenItems = 3000;
// const delayBetweenEvolves = 20000;
const delayBetweenEvolves = 5000;
const delayBetweenTransfers = 3000;

const luckyEggItemId = 301;
const startEvolvingWhenOverEvolvableCount = 90;
const maxPokemontCountBeforeTransfer = .75;

export default class InventoryWorker extends TickWorker {
  constructor({state, client, bot}) {
    super({state, client, bot});
  }

  getConfig() {
    return {
      actEvery: 30 * 1000, // 30 seconds
    };
  }

  act() {
    const {client} = this;
    this.bot.pauseUntil(new Promise(resolve => {
      return client.getInventory(0)
        .bind(this)
        .then(this.processInventory)
        .then(this.performInventoryActions)
        .then(resolve, resolve);
    }));
  }

  performInventoryActions() {
    const {state} = this;

    // const STATE_FILE_NAME = '/tmp/pogobot-inventory.json';
    // jsonfile.writeFile(STATE_FILE_NAME, state.inventory, function (err) {
    //   if (err) console.error(['Failed to save state: ' + err,
    //     state]);
    // });

    const backpackFullnessPercent = state.inventory.itemCount / state.inventory.maxItemCount;
    const hasTooManyItems = (backpackFullnessPercent >= .95);

    let recycleItemsPromise = Promise.resolve;
    if (hasTooManyItems) {
      recycleItemsPromise = this.doRecycleItems.bind(this);
    }

    const pokemonToEvolve = PokemonPruner.getPokemonToEvolve(state.inventory);
    const activeLuckyEgg = this.hasActiveLuckyEgg();
    console.log(`Could evolve ${pokemonToEvolve.length} pokemon`.toString().yellow);

    let evolvePokemonPromise = Promise.resolve;
    if (pokemonToEvolve.length === 0) {
      console.log('No pokemon to evolve'.yellow);
    } else if (activeLuckyEgg || pokemonToEvolve.length > startEvolvingWhenOverEvolvableCount) {
      console.log('Queuing up pokemon evolving actions...'.yellow);

      // Use an egg if you have one before evolving!
      const hasEgg = InventoryPruner.hasItem(luckyEggItemId, state.inventory);
      if (!activeLuckyEgg && hasEgg) {
        evolvePokemonPromise = () => new Promise(resolve => {
          return this.useLuckyEgg()
            .bind(this)
            .then(this.doPokemonEvolving.bind(this, pokemonToEvolve))
            .then(resolve, resolve);
        });
      } else {
        evolvePokemonPromise = this.doPokemonEvolving.bind(this, pokemonToEvolve);
      }
    }

    let transferPokemonPromise = Promise.resolve;
    const pokemonFullnessPercent = state.inventory.pokemonSummary.count / state.inventory.maxPokemonCount;
    const hasTooManyPokemon = (pokemonFullnessPercent >= maxPokemontCountBeforeTransfer);
    if (hasTooManyPokemon && !activeLuckyEgg) {
      transferPokemonPromise = this.doPokemonTransferring.bind(this);
    }

    // Check if we should throw anything away..
    return recycleItemsPromise()
      .bind(this)
      .then(evolvePokemonPromise)
      .delay(3000)
      .then(transferPokemonPromise)
      .then(() => {
        console.log('Done recycling items and evolving and transferring pokemon');
      })
      .catch((e) => {
        console.log('Something went wrong in InventoryWorker!'.red);
        console.log(e);
      });
  }

  processInventory(rawInventory) {
    const {state} = this;

    console.log('Inventory successful'.green);
    const inventory = pogobuf.Utils.splitInventory(rawInventory);
    state.inventory.rawInventory = inventory;

    this.processUpgrades(inventory);
    this.processPlayer(inventory);
    this.processItems(inventory);
    this.processPokemon(inventory);
    this.processCandies(inventory);
    this.processAppliedItems(inventory);
    this.processEggIncubators(inventory);

    return Promise.resolve();
  }

  useLuckyEgg() {
    const {client, state} = this;
    return new Promise((resolve) => {
      utils.deltaItem(luckyEggItemId, -1, state.inventory);
      client.useItemXPBoost(luckyEggItemId)
        .then(response => {
          if (response.result === 1) {
            console.log(`Used lucky egg!`.toString().green);
            state.inventory.applied_items = [response.applied_items];
            this.processAppliedItems(state.inventory);
          } else {
            console.log(`Failed to use lucky egg`.toString().red);
          }
          setTimeout(resolve, 3000);
        });
    });
  }

  processItems(inventory) {
    const {state} = this;
    const items = utils.toLocalItems(inventory.items);
    logUtils.logItems(items);

    const itemsById = {};
    items.map(item => itemsById[item.id] = item);

    state.inventory.items = items;
    state.inventory.itemsById = itemsById;

    let itemCount = 0;
    items.forEach(item => itemCount += item.count);
    state.inventory.itemCount = itemCount;

    console.log(`Player has ${itemCount}/${state.inventory.maxItemCount} items`.toString().green);
  }

  processUpgrades(inventory) {
    const {state} = this;

    state.inventory.maxItemCount = 350;
    state.inventory.maxPokemonCount = 250;

    const inventoryUpgrades = inventory.inventory_upgrades;
    inventoryUpgrades.forEach(({inventory_upgrades}) => {
      inventory_upgrades.forEach(({upgrade_type, additional_storage}) => {
        if (upgrade_type === 1) {
          state.inventory.maxItemCount += additional_storage;
        } else if (upgrade_type === 2) {
          state.inventory.maxPokemonCount += additional_storage;
        }
      });
    });
  }

  processPokemon(inventory) {
    const {state} = this;
    const pokemons = inventory.pokemon;
    const localPokemons = pokemons.map((remotePokemon) => {
      return utils.toLocalPokemon(remotePokemon);
    });
    const localPokemonNoEggs = localPokemons.filter(p => !p.isEgg);
    const localPokemonEggs = localPokemons.filter(p => p.isEgg);

    state.inventory.pokemons = localPokemonNoEggs;
    state.inventory.eggs = localPokemonEggs;

    //const pokemonsByIndex = groupBy(localPokemons, 'pokemonIndex');
    // Object.keys(pokemonsByIndex).forEach(pokemonIndex => {
    //   const pokemons = pokemonsByIndex[pokemonIndex];
    // const count = pokemons.length;
    // const name = (pokemons[0].pokedex || {}).Name || 'Egg?';
    // console.log(`#${pokemonIndex}) ${count}x ${name}`);
    // });

    // Pokemon processing
    state.inventory.pokemonSummary = {
      count: localPokemons.length,
    };

    console.log(`Player has ${localPokemons.length}/${state.inventory.maxPokemonCount} Pokemon`.toString().green);
    console.log(`Player has ${localPokemonEggs.length}/9 Eggs`.toString().green);
  }

  processCandies(inventory) {
    const {state} = this;
    const candies = inventory.candies.map(remoteCandy => {
      return {
        count: remoteCandy.candy,
        familyID: remoteCandy.family_id,
      };
    });

    state.inventory.candies = candies;

    // candies.forEach(candy => {
    //   console.log(`${candy.count}x ${candy.familyID}`);
    // });

    let candyCount = 0;
    candies.forEach(candy => candyCount += candy.count);

    console.log(`Player has ${candyCount} Candies`.toString().green);
  }

  processAppliedItems(inventory) {
    const {state} = this;
    const appliedItems = [];
    inventory.applied_items.forEach((itemGroup) => {
      const items = itemGroup.item;
      const item = items[0];
      if (item.item_id !== 301) return console.log(`Skipping, not an egg`);

      const expireLong = new Long(item.expire_ms.low, item.expire_ms.high, item.expire_ms.unsigned);
      const expirationDate = new Date(expireLong.toNumber());
      const active = Date.now() <= expirationDate.getTime();
      if (active) appliedItems.push({...item, active});

      const activeStr = `active until ${expirationDate}`;
      console.log(`Lucky egg is ${active ? activeStr : 'expired'}`);
    });
    state.inventory.appliedItems = appliedItems;
  }

  processEggIncubators(inventory) {
    const {state} = this;
    state.inventory.eggIncubators = [];
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
        state.inventory.eggIncubators.push({
          id,
          incubatorType: incubator_type,
          itemID: item_id,
          pokemonID: pokemon_id,
          startKmWalked: start_km_walked,
          targetKmWalked: target_km_walked,
          usesRemaining: uses_remaining,
        });
      });
    });

    const incubators = state.inventory.eggIncubators;
    const usedIncubators = incubators.filter(incubator => incubator.pokemonID.toNumber() !== 0);
    console.log(`${incubators.length} egg incubators, ${usedIncubators.length} are in use.`);
  }

  hasActiveLuckyEgg() {
    const {state} = this;
    return some(state.inventory.appliedItems, (item) => {
      const expireLong = new Long(item.expire_ms.low, item.expire_ms.high, item.expire_ms.unsigned);
      const expirationDate = new Date(expireLong.toNumber());
      return Date.now() <= expirationDate.getTime();
    });
  }

  processPlayer(inventory) {
    const toNumber = (long) => new Long(long.low, long.high, long.unsigned).toNumber();

    const {state} = this;
    const playerData = inventory.player;
    const nextLevelXP = toNumber(playerData.next_level_xp);
    const experience = toNumber(playerData.experience);
    const player = {
      level: playerData.level,
      nextLevelXP,
      experience,
    };
    state.inventory.player = player;

    const levelIndex = playerData.level - 1;
    const levelData = levelXP[levelIndex];
    const totalXPForCurrentLevel = levelData.xpTotal;
    const currentLevelXP = experience - totalXPForCurrentLevel;
    const xpNeededForNextLevel = nextLevelXP - totalXPForCurrentLevel;

    console.log(`${('Level ' + playerData.level.toFixed(0)).yellow}, ${((currentLevelXP / xpNeededForNextLevel * 100).toFixed(1) + '%').green} to next level! (${currentLevelXP}/${xpNeededForNextLevel})`);
    //const xpNeededForMaxLevel = levelXP[levelXP.length - 1].xpTotal;
    //console.log(`${(experience / xpNeededForMaxLevel * 100).toFixed(1)}% to MAX level!`);
  }

  doRecycleItems() {
    const {client, state} = this;
    const {items, maxItemCount} = state.inventory;
    const throwAwayCountByType = InventoryPruner.getThrowAwayCountByType(items, maxItemCount);
    const throwAwayItems = InventoryPruner.getThrowAwayItemsSubset(items, throwAwayCountByType);

    if (throwAwayItems.length === 0) {
      console.log('Keeping all items, bag not full');
      return Promise.resolve();
    }

    return new Promise(resolve => {
      async.eachSeries(throwAwayItems, (item, cb) => {
        const count = item.count;
        const name = logUtils.getItemNameString(item.name);
        console.log(`Recycling ${count} ${name}...`);

        client.recycleInventoryItem(item.id, count)
          .then(response => {
            if (response.result === 1) {
              console.log(`Recycled ${count} ${name}`.toString().green);
              state.inventory.itemsById[item.id].count = response.new_count;
            } else {
              console.log(`Failed to recyle ${count} ${name}`.toString().red);
            }
            setTimeout(cb, delayBetweenItems);
          });
      }, resolve);
    });
  }

  // Overall Pokemon management
  doPokemonEvolving(pokemonToEvolve) {
    const {client} = this;
    return new Promise(resolve => {
      console.log(`Evolving ${pokemonToEvolve.length} pokemon`.toString().yellow);
      async.eachSeries(pokemonToEvolve, (pokemon, cb) => {
        console.log(`Evolving ${logUtils.getPokemonNameString(pokemon)}`);

        client.evolvePokemon(pokemon.id)
          .then(response => {
            if (response.result === 1) {
              const newPokemonData = utils.toLocalPokemon(response.evolved_pokemon_data);
              console.log(`Evolved ${logUtils.getPokemonNameString(pokemon)} to ${logUtils.getPokemonNameString(newPokemonData)}`.toString().green);
              console.log(`Got ${response.experience_awarded.toString().green} xp and ${response.candy_awarded.toString().green} candy`);
            } else {
              console.log(`Failed to evolve ${logUtils.getPokemonNameString(pokemon)}`.toString().red);
            }
            setTimeout(cb, delayBetweenEvolves);
          });
      }, resolve);
    });
  }

  doPokemonTransferring() {
    const {client, state} = this;
    return new Promise(resolve => {;
      const pokemons = PokemonPruner.getPokemonToTransfer(state.inventory, env.maxTransferCP);
      if (pokemons.length === 0) {
        console.log('No pokemon to transfer'.yellow);
        return resolve();
      }

      console.log(`Transferring ${pokemons.length} pokemon`.toString().yellow);
      async.eachSeries(pokemons, (pokemon, cb) => {
        console.log(`Transferring ${logUtils.getPokemonNameString(pokemon)}`);

        client.releasePokemon(pokemon.id)
          .then(response => {
            if (response.result === 1) {
              console.log(`Transferred ${logUtils.getPokemonNameString(pokemon)}`.toString().green);
              console.log(`Got ${response.candy_awarded.toString().green} candy`);
            } else {
              console.log(`Failed to transfer ${logUtils.getPokemonNameString(pokemon)}`.toString().red);
            }
            setTimeout(cb, delayBetweenTransfers);
          });
      }, resolve);
    });
  }
}
