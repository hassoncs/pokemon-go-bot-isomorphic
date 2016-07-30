import React, {Component} from 'react';
import {Link} from 'react-router';
import config from '../../config';
import Helmet from 'react-helmet';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    const position = [37.758081, -122.403862];

    const {Map, Marker, Popup, TileLayer} = require('react-leaflet');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div className={styles.container}>
          <Map center={position} zoom={16}>
            <TileLayer
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
              </Popup>
            </Marker>
          </Map>
        </div>
      </div>
    );
  }
}
