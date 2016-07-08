import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { formReducer } from 'react-redux-form';
import { createStore, applyMiddleware } from 'redux';
import { modelReducer, formReducer } from 'react-redux-form';
import {Router, Route, Link, RouteHandler} from 'react-router';

import SearchBar from './components/searchbar.js';

export default class IndexApp extends Component{

	render() {
    return (
      <Provider store={ store }>
        <SearchBar />
      </Provider>
    );
  }
}

const store = createStore(combineReducers({
  search: modelReducer('search', { val: '' }),
  searchForm: formReducer('search')
}));

