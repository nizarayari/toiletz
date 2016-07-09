import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/app';
import Details from './components/details'
import Home from './components/home';
import SearchBar from './components/search';

export default (
	<Router>
		<Route path="/" component={App}>
			<IndexRoute component={SearchBar} />
			<Route path="home" component={Home} />
			<Route path="details" component={Details} />
		</Route>
	</Router>
);