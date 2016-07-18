import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import reducers from './reducers';
import promise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import { AUTH_USER } from './actions/auth'

const createStoreWithMiddleware = applyMiddleware(
	reduxThunk,promise
)(createStore);

const store = createStoreWithMiddleware(reducers);

//Automatically authenticated
const token = localStorage.getItem('token');
//if we have a token, consider the user to be signed in
if(token){
	//we need to update application state
	store.dispatch({ type: AUTH_USER})
}

ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
