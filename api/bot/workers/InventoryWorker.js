import TickWorker from './TickWorker';
import logUtils from '../utils/logUtils';
import groupBy from 'lodash/groupBy';
import InventoryPruner from '../utils/InventoryPruner';
import PokemonPruner from '../utils/PokemonPruner';
import async from 'async';
import jsonfile from 'jsonfile';
import Promise from 'bluebird';
import Pokemon from "../models/Pokemon";
import Item from "../models/Item";
import Inventory from "../models/Inventory";
const env = require('../../../env');

const luckyEggItemId = 301;
const luckyEggDuration = 30 * 60 * 1000; // 30 minutes
const startEvolvingWhenOverEvolvableCount = Math.floor(luckyEggDuration / env.delayBetweenEvolves);

export default class InventoryWorker extends TickWorker {
  constructor({state, client, stats, bot}) {
    super({state, client, stats, bot});
  }

  getConfig() {
    return {
      actEvery: 60 * 1000,
    };
  }

  act() {
    const {client} = this;
    this.bot.pauseUntil(
      client.getInventory(0)
        .bind(this)
        .then(this.processInventory)
        .then(this.performInventoryActions)
    );
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
    const activeLuckyEgg = state.inventory.hasActiveLuckyEgg();
    console.log(`Could evolve ${pokemonToEvolve.length} pokemon`.toString().yellow);

    let evolvePokemonPromise = Promise.resolve;
    if (pokemonToEvolve.length === 0) {
      console.log('No pokemon to evolve'.yellow);
    } else if (activeLuckyEgg || pokemonToEvolve.length >= startEvolvingWhenOverEvolvableCount) {
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
    const hasTooManyPokemon = (pokemonFullnessPercent >= env.maxPokemonPercentFullBeforeTransfer);
    const totallyFullOfPokemon = pokemonFullnessPercent >= 1;
    if (totallyFullOfPokemon || hasTooManyPokemon && !activeLuckyEgg) {
      transferPokemonPromise = this.doPokemonTransferring.bind(this);
    }

    let hatchEggsPromise = Promise.resolve;
    if (state.inventory.finishedEggIncubators.length > 0) {
      hatchEggsPromise = this.checkForHatchedEggs;
    }

    // Check if we should throw anything away..
    return this.checkForLevelUp()
      .bind(this)
      .then(recycleItemsPromise)
      .then(evolvePokemonPromise)
      .then(transferPokemonPromise)
      .then(hatchEggsPromise)
      .then(this.incubateEggs)
      .then(() => {
        console.log('Done recycling items and evolving and transferring pokemon');
      })
      .catch((e) => {
        console.log('Something went wrong in InventoryWorker!'.red);
        console.log(e);
        console.log(e.stack);
        throw e;
      });
  }

  processInventory(rawInventory) {
    const {state} = this;

    console.log('Inventory successful'.green);
    state.inventory.process(rawInventory);

    return Promise.resolve();
  }

  useLuckyEgg() {
    const {client, state} = this;
    return new Promise((resolve) => {
      state.inventory.deltaItem(luckyEggItemId, -1);
      client.useItemXPBoost(luckyEggItemId)
        .then(response => {
          if (response.result === 1) {
            console.log(`Used lucky egg!`.toString().green);
            state.inventory.processAppliedItems({
              applied_items: [response.applied_items]
            });
          } else {
            console.log(`Failed to use lucky egg`.toString().red);
          }
          setTimeout(resolve, 3000);
        });
    });
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
            setTimeout(cb, env.delayBetweenRecyclingItems);
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
              const newPokemonData = Pokemon.fromRemotePokemon(response.evolved_pokemon_data);
              console.log(`Evolved ${logUtils.getPokemonNameString(pokemon)} to ${logUtils.getPokemonNameString(newPokemonData)}`.toString().green);
              console.log(`Got ${response.experience_awarded.toString().green} xp and ${response.candy_awarded.toString().green} candy`);
              this.stats.xpPerHour.logEvent(+response.experience_awarded);
            } else {
              console.log(`Failed to evolve ${logUtils.getPokemonNameString(pokemon)}`.toString().red);
            }
            setTimeout(cb, env.delayBetweenEvolves);
          });
      }, resolve);
    });
  }

  doPokemonTransferring() {
    const {client, state} = this;
    return new Promise(resolve => {
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
            setTimeout(cb, env.delayBetweenTransfers);
          });
      }, resolve);
    });
  }

  checkForHatchedEggs() {
    const {client} = this;
    return new Promise(resolve => {
      client.getHatchedEggs()
        .then(response => {
          if (response.success) {
            console.log(`Successfully checked for hatched eggs`.toString().green);
            const pokemonIDs = response.pokemon_id;
            const candyAwarded = response.candy_awarded;
            const experienceAwarded = response.experience_awarded;
            const stardustAwarded = response.stardust_awarded;
            this.stats.xpPerHour.logEvent(+experienceAwarded[0]);
            console.log(`${pokemonIDs.length.toString().green} eggs hatched.`);
            console.log(`Got ${experienceAwarded[0].toString().green} xp, ${candyAwarded[0].toString().green} candies, and ${stardustAwarded[0].toString().green} stardust`);
          } else {
            console.log(`Failed to check for hatched eggs`.toString().red);
          }

          return resolve();
        }, resolve);
    });
  }

  checkForLevelUp() {
    const {client, state} = this;
    const {player} = state.inventory;
    if (!player.leveledUp) return Promise.resolve();
    player.leveledUp = false;

    return client.levelUpRewards(player.level)
      .then(response => {
        const localItems = (response.items_awarded || []).map(Item.fromRemoteItem);
        logUtils.logItems(localItems, 'green');
        state.inventory.deltaItems(localItems);
        return Promise.resolve();
      });
  }

  incubateEggs() {
    const {client, state} = this;
    return new Promise(resolve => {
      const {eggIncubators} = state.inventory;

      let allEggIDs = state.inventory.eggs.map(egg => egg.id);
      eggIncubators.forEach(incubator => {
        if (incubator.beingUsed) {
          allEggIDs = allEggIDs.filter(eggID => eggID !== incubator.pokemonID);
        }
      });

      console.log('Incubating Eggs...');
      console.log(`${allEggIDs.length}/${state.inventory.eggs.length} are available to incubate`);
      if (allEggIDs.length === 0) return resolve();

      async.eachSeries(eggIncubators, (incubator, cb) => {
        const {id, itemID} = incubator;

        if (incubator.beingUsed) {
          //console.log(`Skipping incubator ${id}, it's being used already.`);
          return cb();
        }

        const pokemonID = allEggIDs.shift();
        incubator.beingUsed = true;
        incubator.pokemonID = pokemonID;
        console.log(`Putting egg ${pokemonID} in incubator ${incubator.id}`);

        client.useItemEggIncubator(incubator.id, pokemonID)
          .then(response => {
            if (response.result === 1) {
              console.log(`Put egg ${pokemonID} in incubator ${incubator.id}`.toString().green);
            } else {
              console.log(`Failed to put egg ${pokemonID} in incubator ${incubator.id}`.toString().red);
            }
            return cb();
          });
      }, resolve);
    });
  }
}
