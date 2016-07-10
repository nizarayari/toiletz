import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

import {connect} from 'react-redux';


const image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

export default class SimpleMap extends Component{

  constructor(props) {
    super(props);
    this.state = { hide: true };
  }


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

  onCloseClick(index) {
    console.log('onCloseClick');
    var obj = {};
              obj['marker' + index] = false;
              this.setState(obj);
  }

  onClick(e) {
    console.log('e',e)
    this.props.toilets.map((toilet, index) => {
              var obj = {};
              obj['marker' + index] = false;
              this.setState(obj);
            });
    var obj = {};
              obj['marker' + e] = true;
              this.setState(obj);
  }
  
  onComponentDidMount() {
    this.props.toilets.map((toilet, index) => {
      var obj = {};
      obj['marker' + index] = false;
      this.setState(obj);
      });
      this.setState({hide: false})
  }
  

  render() {

    if(!this.props.toilets){
      return null;
    }


    return (
      <Gmaps
        width={'1200px'}
        height={'600px'}
        lat={34.016484}
        lng={-118.496216}
        zoom={14}
        loadingMessage={'Loading...'}
        params={{v: '3.exp', key: 'AIzaSyB85KqmtnH-PdxoaFTRZRWZJLI6H48oa-Q'}}
        onMapCreated={this.onMapCreated}>
        
        {this.props.toilets.map((toilet, index) => {
              return (
                <Marker
                  key={index}
                  lat={toilet.latitude}
                  lng={toilet.longitude}
                  title={toilet.description}
                  draggable={false}
                  icon = {image}
                  onClick={this.onClick.bind(this, index)}
                  />

              )
            })} 
      {this.props.toilets.map((toilet, index) => {
            if (!this.state['marker' + index]) {
              return (null);
            } else {
              return (
                <InfoWindow
                className='testing'
                key={index}
                  lat={toilet.latitude}
                  lng={toilet.longitude}
                  content={toilet.description+"\n"+toilet.description}
                  onCloseClick={this.onCloseClick.bind(this, index)} />
              )
            }})}

      </Gmaps>
    );
  }

};


function mapStateToProps(state){
  return{
    toilets:state.toilets //from rootReducer (index.js in reducers)
  }
}

export default connect (mapStateToProps)(SimpleMap);






