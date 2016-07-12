import SearchBar from './search';
import { Link } from 'react-router';
import React, { Component } from 'react';



export default class Header extends Component{

	render(){

		return(
			<div>
				<ul>
					<li><SearchBar /></li>
					<li>
						<Link to={'sign_in'}>
							<span>
								<button>Sign In</button>
							</span>
						</Link>
					</li>
					<li>
						<Link to={'sign_up'}>
							<span>
								<button>Sign Up</button>
							</span>
						</Link>
					</li>
				</ul>
			</div>
		);

	}
}

