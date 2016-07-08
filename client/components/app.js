import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import ToiletList from '../containers/toilet-list';
import reducers from '../reducers';

export default class App extends Component{

	render(){

		return(
			<div>
			<ToiletList/>
			</div>
		);

	}
}

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
	<App/>
	</Provider>,
	document.getElementById('app')
)