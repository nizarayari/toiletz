import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/app';
import Details from './components/details'
import Home from './components/home';
import Landing from './components/landing';

export default (
	<Router>
		<Route path="/" component={App}>
			<IndexRoute component={Landing} />
			<Route path="home" component={Home} />
			<Route path="details" component={Details} />
		</Route>
	</Router>
);