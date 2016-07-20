import SearchBar from './search';
import { Link } from 'react-router';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/auth';



class Header extends Component{


	renderLinks(){
		if (this.props.auth){
			//show a link to sign out
			//show a link to add toilet
		return(	<div className="header-links">
							<ul className="nav navbar-nav">
							<li><Link to={'toiletz_new'}>Add Toilet</Link></li>
							<li  onClick ={this.props.signoutUser.bind(this)} ><Link to={'/'}>Sign Up</Link></li>
							</ul>
						</div>
		);
		} else {
			//show a link to sign in or sign up
			return ( <div className="header-links">
			<ul className="nav navbar-nav">
			<li><Link to={'sign_in'}>Sign in</Link></li>
			<li><Link to={'sign_up'}>Sign Up</Link></li>
			</ul>
		</div>

			)
		}
	}


	render(){

		return(
			<nav className="navbar navbar-default navbar-fixed-top topnav" role="navigation">
			  <div className="topnav">
			    <div className="navbar-header">
			      <Link to={"/"}><a class="navbar-brand" href="#"><img alt="Brand" id="brand" src="../src/assets/toilet-logo-dark.png" /></a></Link>
			    </div>

			        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<div className="nav navbar-nav navbar-right">
								{this.renderLinks()}
								<SearchBar />

													</div>
				      </div>
			      	</div>

			</nav>
		);

	}
}

function mapStateToProps(state) {
	return {auth:state.auth.authenticated};
}

export default connect(mapStateToProps,actions)(Header);
