import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/app';
import Details from './components/details'
import Home from './components/home';
import Landing from './components/landing';
import SignIn from './components/sign_in';
import SignUp from './components/sign_up';
import ToiletzNew from './components/toiletz_new';
import ReviewsNew from './components/review_new';

export default (
	<Router>
		<Route path="/" component={App}>
			<IndexRoute component={Landing} />
			<Route path="home" component={Home} />
			<Route path="details" component={Details} />
			<Route path="sign_in" component={SignIn} />
			<Route path="sign_up" component={SignUp} />
			<Route path="toiletz_new" component={ToiletzNew} />
			<Route path="review_new" component={ReviewsNew} />
		</Route>
	</Router>
);