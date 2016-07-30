import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Long from 'long';
import config from '../../config';
import Helmet from 'react-helmet';
import * as widgetActions from 'redux/modules/widgets';
import { asyncConnect } from 'redux-async-connect';
import {isLoaded, load as loadWidgets} from 'redux/modules/widgets';
import PokemonIcon from 'components/PokemonIcon/PokemonIcon';

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

  componentDidUpdate() {
    if (this._map) this._map.leafletElement.invalidateSize();
  }

  render() {
    const L = require('leaflet');
    const {Map, Marker, Popup, TileLayer} = require('react-leaflet');
    const styles = require('./Home.scss');
    const {widgets, load} = this.props;
    const state = widgets;
    const playerLatLng = state.movement.currentLatLng;

    console.log(widgets);
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div className={styles.panel}>
          <button onClick={load}>Load</button>
        </div>
        <div className={styles.container}>
          <Map
            center={playerLatLng}
            zoom={16}
            ref={(el) => this._map = el}
          >
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
                      <PokemonIcon pokemonId={pokemon.pokemon_id} />
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
