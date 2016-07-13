import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

export default class Footer extends Component{

	render(){

		return(
			 <footer className="navbar-default navbar-fixed-bottom">
		        <div className="container">
		            <div className="row">
		                <div className="col-lg-12">
		                    <ul className="list-inline">
		                        <li>
		                            <Link to={"/"}>Home</Link>
		                        </li>
		                        <li className="footer-menu-divider">&sdot;</li>
		                        <li>
		                            <Link to={"about"}>About</Link>
		                        </li>
		                        <li className="footer-menu-divider">&sdot;</li>
		                        <li>
		                            <Link to={"contact"}>Contact</Link>
		                        </li>
		                    </ul>
		                    <p className="copyright text-muted small">Copyright &copy; Team Name? 2016. All Rights Reserved</p>
		                </div>
		            </div>
		        </div>
		    </footer>
		);

	}
}

