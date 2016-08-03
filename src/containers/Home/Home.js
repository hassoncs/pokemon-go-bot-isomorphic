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

  componentDidMount() {
    this._refreshInterval = setInterval(() => {
      this.props.load();
    }, 1000);
  }

  componentDidUpdate() {
    if (this._map) this._map.leafletElement.invalidateSize();
  }

  componentWillUnmount() {
    clearInterval(this._refreshInterval);
  }

  render() {
    const L = require('leaflet');
    const {Map, Marker, Popup, TileLayer, Polyline} = require('react-leaflet');
    const styles = require('./Home.scss');
    const {widgets, load} = this.props;
    const state = widgets;

    if (!state) return null;
    const targetLatLng = state.movement.targetLatLng;
    const playerLatLng = state.movement.currentLatLng;
    const playerRandomizedLatLng = state.movement.randomizedLatLng;

    console.log(widgets);
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div className={styles.panel}>
          <button onClick={load}>Load</button>

          Heading to fort {state.target.distanceToTarget.toFixed(0)}m away.
          ETA {state.target.timeTilTarget.toFixed(0)}s.
        </div>
        <div className={styles.container}>
          <Map
            center={playerLatLng}
            zoom={17}
            ref={(el) => this._map = el}
          >
            <TileLayer
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />
            {widgets && widgets.mapSummary.pokemons.map((pokemon) => (
              <Marker
                key={pokemon.id}
                icon={L.divIcon({className: styles.pokemonMarker})}
                position={[pokemon.latLng.lat, pokemon.latLng.lng]}
              >
                <Popup>
                  <div>
                    <div>{pokemon.pokemonID}</div>
                    <div>
                      <PokemonIcon pokemonId={pokemon.pokemonID} />
                    </div>
                    <div>
                      {`${new Date(new Long(
                        pokemon.expirationTimestampMs.low,
                        pokemon.expirationTimestampMs.high,
                        pokemon.expirationTimestampMs.unsigned
                      ).toNumber()).toString()}`}
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
            {widgets && widgets.mapSummary.forts.map((fort) => (
              <Marker
                key={fort.id}
                icon={L.icon({
                  iconUrl:
                    require(`../../components/PokemonIcon/images/pokestop${(state.target.fortsHistory[fort.id] || {}).arrivedEpoch ? '-used' : ''}.png`),
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
            <Marker
              icon={L.divIcon({className: styles.playerMarkerRandomized})}
              position={playerRandomizedLatLng} key={'playerRandomized'}
            >
              <Popup>
                  <span>
                    Player
                  </span>
              </Popup>
            </Marker>
            <Polyline
              positions={[playerLatLng, targetLatLng]}
            />
          </Map>
        </div>
      </div>
    );
  }
}
