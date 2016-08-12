import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import { asyncConnect } from 'redux-async-connect';
const styles = require('./PokemonIcon.scss');

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

export default class PokemonIcon extends Component {
  static propTypes = {
    pokemonIndex: PropTypes.number,
  };

  render() {
    const pokemonId = `${this.props.pokemonIndex + 1}`;
    return (
      <div className={styles.root}>
        <img
          className={styles.pokemonIcon}
          src={require(`../../components/PokemonIcon/images/${pad(pokemonId, 3)}.png`)}
        />
      </div>
    );
  }
}
