import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import config from '../../config';
import Helmet from 'react-helmet';
import * as widgetActions from 'redux/modules/widgets';
import { asyncConnect } from 'redux-async-connect';
import {isLoaded, load as loadWidgets} from 'redux/modules/widgets';

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
                  <span>
                    {pokemon.pokemon_id}
                    <img src={require(`../../components/PokemonIcon/0${pokemon.pokemon_id}.png`)} />
                  </span>
                </Popup>
              </Marker>
            ))}
            {widgets && widgets.mapSummary.forts.map((fort) => (
              <Marker
                key={fort.id}
                icon={L.divIcon({className: styles.fortMarker})}
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
