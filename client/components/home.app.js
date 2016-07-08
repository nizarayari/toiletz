import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route, Link, RouteHandler} from 'react-router';
import GoogleMap from './google_map'

import ToiletList from '../containers/home.toilet-list';
import reducers from '../reducers';

export default class HomeApp extends Component{

	render(){

		return(
			<div>
			<ToiletList/>
			<GoogleMap/>
			</div>
		);

	}
}

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
	<HomeApp/>
	</Provider>,
	document.getElementById('app')
)