import SearchBar from './search';
import { Link } from 'react-router';
import React, { Component } from 'react';



export default class Header extends Component{

	render(){

		return(
			<nav className="navbar navbar-default navbar-fixed-top topnav" role="navigation">
			  <div className="container topnav">
			    <div className="navbar-header">
			      <h2>Toiletz</h2>
			    </div>
		       		<div className="nav navbar-nav navbar-center">
		          		<SearchBar />
		          	</div>
			        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				      <div className="nav navbar-nav navbar-right">
						<span>
							<Link to={'sign_in'}>
								<span>
									<button className="btn btn-default">Sign In</button>
								</span>
							</Link>
						</span>
						<span>
							<Link to={'sign_up'}>
								<span>
									<button className="btn btn-default">Sign Up</button>
								</span>
							</Link>
						</span>
				      </div>
			      	</div>
			    </div>
			</nav>
		);

	}
}

