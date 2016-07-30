import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Long from 'long';
import config from '../../config';
import Helmet from 'react-helmet';
import * as widgetActions from 'redux/modules/widgets';
import { asyncConnect } from 'redux-async-connect';
import {isLoaded, load as loadWidgets} from 'redux/modules/widgets';

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

@asyncConnect([{
  deferred: true,
  promise: ({store: {dispatch, getState}}) => {
    if (!isLoaded(getState())) {
      return dispatch(loadWidgets());
    }
  }
}])
@connect(
  state => ({
    widgets: state.widgets.data,
  }),
  {...widgetActions })
export default class Home extends Component {
  static propTypes = {
    widgets: PropTypes.object,
    load: PropTypes.func.isRequired,
  };


  render() {
    const L = require('leaflet');
    const {Map, Marker, Popup, TileLayer} = require('react-leaflet');
    const styles = require('./Home.scss');
    const playerLatLng = [37.758081, -122.403862];
    const {widgets, load} = this.props;
    console.log(widgets);
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div className={styles.panel}>
          <button onClick={load}>Load</button>
        </div>
        <div className={styles.container}>
          <Map center={playerLatLng} zoom={16}>
            <TileLayer
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />
            {widgets && widgets.mapSummary.catchable_pokemons.map((pokemon) => (
              <Marker
                key={pokemon.id}
                icon={L.divIcon({className: styles.pokemonMarker})}
                position={[pokemon.latitude, pokemon.longitude]}
              >
                <Popup>
                  <div>
                    <div>{pokemon.pokemon_id}</div>
                    <div>
                      <img
                        className={styles.pokemonIcon}
                        src={require(`../../components/PokemonIcon/images/${pad(pokemon.pokemon_id, 3)}.png`)}
                      />
                    </div>
                    <div>
                      {`${new Date(new Long(
                        pokemon.expiration_timestamp_ms.low,
                        pokemon.expiration_timestamp_ms.high,
                        pokemon.expiration_timestamp_ms.unsigned).toNumber()).toString()}`}
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
            {widgets && widgets.mapSummary.forts.map((fort) => (
              <Marker
                key={fort.id}
                icon={L.icon({
                  iconUrl: require(`../../components/PokemonIcon/images/pokestop.png`),
                  className: styles.fortMarker,
                })}
                position={[fort.latitude, fort.longitude]}
              >
                <Popup>
                  <span>
                    {fort.id}
                  </span>
                </Popup>
              </Marker>
            ))}
            <Marker
              icon={L.divIcon({className: styles.playerMarker})}
              position={playerLatLng} key={'player'}
            >
              <Popup>
                  <span>
                    Player
                  </span>
              </Popup>
            </Marker>
          </Map>
        </div>
      </div>
    );
  }
}
