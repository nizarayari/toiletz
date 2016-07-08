import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
  lat: 34.020440,
  lng: -118.494297
};

const image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

export default class SimpleMap extends Component{

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true,
      streetViewControl: true,
      streetViewControlOptions:true,
      zoomControl:true,
      zoomControlOptions: true,
      panControl:true,
      panControlOptions: true
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }

  render() {
    return (
      <Gmaps
        width={'1200px'}
        height={'600px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={14}
        loadingMessage={'Be happy'}
        params={{v: '3.exp', key: 'AIzaSyB85KqmtnH-PdxoaFTRZRWZJLI6H48oa-Q'}}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd}
          icon = {image}
           />
           <Marker
          lat={34.016484}
          lng={-118.496216}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'Hello, MKS-41:)'}
          onCloseClick={this.onCloseClick} />
        <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={100}
          onClick={this.onClick} />
      </Gmaps>
    );
  }

};

