import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import sortBy from 'lodash/sortBy';
import { asyncConnect } from 'redux-async-connect';
import PokemonIcon from 'components/PokemonIcon/PokemonIcon';
import Pokemon from '../../../api/bot/models/Pokemon';

const styles = require('./InventoryPanel.scss');

const tabs = [{ name: 'pokemon' }, { name: 'items' }];

export default class InventoryPanel extends Component {
  static propTypes = {
    inventory: PropTypes.object,
  };

  constructor() {
    super();
    this.state = {
      activeTab: tabs[0],
    };
  }

  _setActiveTab(activeTab) {
    this.setState({activeTab});
  }

  render() {
    const {activeTab} = this.state;
    const {inventory} = this.props;
    if (!inventory || !inventory.pokemons) return null;

    const pokemons = inventory.pokemons.map(p => new Pokemon(p));
    const sortedPokemons = sortBy(pokemons, 'pokemonIndex');
    return (
      <div className={styles.root}>

        <div className={styles.tabContent}>
          <div className={styles.pokemonListHeader}>
            <div className={styles.pokemonIcon}></div>
            <div className={styles.pokemonName}>
              Name
            </div>
            <div className={styles.pokemonCP}>
              CP
            </div>
            <div className={styles.pokemonIV}>
              IV
            </div>
          </div>
          <div className={styles.pokemonList}>
            {sortedPokemons.map((pokemon) => (
              <div
                className={styles.pokemonRow}
                key={pokemon.id}
              >
                <div className={styles.pokemonIcon}>
                  <PokemonIcon pokemonIndex={pokemon.pokemonIndex} />
                </div>
                <div className={styles.pokemonName}>
                  #{pokemon.pokemonIndex} {pokemon.pokedex.Name}
                </div>
                <div className={styles.pokemonCP}>
                  {pokemon.cp}
                </div>
                <div className={styles.pokemonIV}>
                  {pokemon.getIV()}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.header}>
          <div className={styles.title}>Inventory</div>
          <div className={styles.tabs}>
            {tabs.map(tab => (
              <div
                key={tab.name}
                onClick={() => this._setActiveTab(tab)}
                className={`${styles.tab} ${tab === activeTab ? styles.active : ''}`}>
                {tab.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
