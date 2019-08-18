import './App.css';
import MapGL, {NavigationControl} from 'react-map-gl';
import React, {Component} from 'react';


const TOKEN =  'pk.eyJ1IjoiYXN3YXJ0aCIsImEiOiJjanpoYmwyazgwdTZiM2Jud3Rta2g0Y2x6In0.YD63deJvp4xNn5Ezjq0fKg'

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

export default class Map extends Component {
  state = {
    viewport: {
      latitude: 32.0853,
      longitude: 34.7818,
      zoom: 11.3,
      bearing: 0,
      pitch: 0,
      width: '100vw',
      height: '100vh',
    }
  };

  render() {
    const {viewport} = this.state;
    return (
      <MapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken={TOKEN}>

      </MapGL>
    );
  }
}
