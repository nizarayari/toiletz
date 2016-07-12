import React from 'react';
import SearchBar from './search';
import { Component } from 'react';
import { Link } from 'react-router';



export default class Header extends Component{

	render(){

		return(
			<div>
				<SearchBar />
				<Login />
				<Signup />
			</div>
		);

	}
}

