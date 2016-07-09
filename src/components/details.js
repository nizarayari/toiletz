import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import ToiletDetails from '../container/toilet_details';


export default class Home extends Component{

	render(){

		return(
			<div>
				<ToiletDetails/>
			</div>
		);

	}
}

