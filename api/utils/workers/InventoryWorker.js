import TickWorker from './TickWorker';
import pogobuf from 'pogobuf';
import POGOProtos from 'node-pogo-protos';
import utils from '../utils';
import logUtils from '../logUtils';
import groupBy from 'lodash/groupBy';
import InventoryPruner from '../InventoryPruner';
import async from 'async';
import jsonfile from 'jsonfile';

const delayBetweenItems = 3000;

export default class InventoryWorker extends TickWorker {
  constructor({state, client, bot}) {
    super({state, client, bot});
    this._pausedTimeMs = 5000;
  }

  getConfig() {
    return {
      actEvery: 30 * 1000, // 30 seconds
    };
  }

  act() {
    const {client, state} = this;
    client.getInventory(0)
      .then(rawInventory => {
        if (!rawInventory.success) reject('success=false in inventory response');

        console.log('Inventory successful'.green);
        const inventory = pogobuf.Utils.splitInventory(rawInventory);
        // state.inventory.rawInventory = inventory;

        this.processItems(inventory);
        this.processPokemon(inventory);
        this.processCandies(inventory);

        // const STATE_FILE_NAME = '/tmp/pogobot-inventory.json';
        // jsonfile.writeFile(STATE_FILE_NAME, state.inventory, function (err) {
        //   if (err) console.error(['Failed to save state: ' + err,
        //     state]);
        // });

        // Check if we should throw anything away..
        this.doRecycleItems();
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

    console.log(`Player has ${itemCount} items`.toString().green);
  }

  processPokemon(inventory) {
    const {state} = this;
    const pokemons = inventory.pokemon;
    const localPokemons = pokemons.map((remotePokemon) => {
      return utils.toLocalPokemon(remotePokemon);
    });
    state.inventory.pokemons = localPokemons;

    const pokemonsByIndex = groupBy(localPokemons, 'pokemonIndex');
    Object.keys(pokemonsByIndex).forEach(pokemonIndex => {
      const pokemons = pokemonsByIndex[pokemonIndex];
      const count = pokemons.length;
      const name = (pokemons[0].pokedex || {}).Name || 'Egg?';
      console.log(`#${pokemonIndex}) ${count}x ${name}`);
    });

    // Pokemon processing
    state.inventory.pokemonSummary = {
      count: localPokemons.length
    };

    console.log(`Player has ${localPokemons.length} Pokemon`.toString().green);
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

    console.log(`Player has ${candyCount} Candies`.toString().green);  }

  doRecycleItems() {
    const {client, state} = this;
    const {items} = state.inventory;
    const throwAwayCountByType = InventoryPruner.getThrowAwayCountByType(items);
    const throwAwayItems = InventoryPruner.getThrowAwayItemsSubset(items, throwAwayCountByType);

    if (throwAwayItems.length === 0) {
      return console.log('Keeping all items, bag not full');
    }

    // Pause for a moment before recycling
    this.bot.pause(2000);

    async.eachSeries(throwAwayItems, (item, cb) => {
      const count = item.count;
      const name = logUtils.getItemNameString(item.name);
      console.log(`Recycling ${count} ${name}...`);

      this.bot.pause(delayBetweenItems);
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
    });
  }

  doPokemonPruning() {
    // Overall Pokemon management

    // For each type of pokemon we want to know
    // if we have all the evolutions. If not, save
    // enough candies to get the farthest evolution.
    // See how many candies we have for each pokemon type
    //
  }
}
