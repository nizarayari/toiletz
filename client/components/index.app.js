import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { modelReducer, formReducer } from 'react-redux-form';
import {Router, Route, Link, RouteHandler} from 'react-router';

import SearchBar from '../containers/searchbar.js';
import reducers from '../reducers';

export default class IndexApp extends Component{

	render() {
    return (
   		<div>
        <SearchBar />
        </div>
    );
  }
}

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
	<IndexApp/>
	</Provider>,
	document.getElementById('app')
)

