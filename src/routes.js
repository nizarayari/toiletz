import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/app';
import Details from './components/details'
import Home from './components/home';
import Landing from './components/landing';
import SignIn from './components/sign_in';
import SignUp from './components/sign_up';

export default (
	<Router>
		<Route path="/" component={App}>
			<IndexRoute component={Landing} />
			<Route path="home" component={Home} />
			<Route path="details" component={Details} />
			<Route path="sign_in" component={SignIn} />
			<Route path="sign_up" component={SignUp} />
		</Route>
	</Router>
);