import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route, Link, RouteHandler} from 'react-router';

// COMPONENT
import IndexApp from '.../components/index.app.js';
import HomeApp from '.../components/home.app.js';
import DetailsApp from '.../components/details.app.js';
import NotFoundSection from '.../components/details.app.js';

//login Routes for later
// import LoginForm from ;
// import SignupForm from ;

export default (
    <Route path='/' component={IndexApp} />
      <IndexRoute component={IndexApp} />
      <Route path='home' component={HomeApp} />
      <Route path='details' component={DetailsApp} />
      <Route path='*' component={NotFound} />
    </Route>
);


