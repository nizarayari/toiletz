import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import GoogleMap from './google_map'
import ToiletList from '../container/toilet_list';


export default class Home extends Component{

	render(){

		return(
			<div>
				<GoogleMap />
				<div className="home-header">
				Click on toilet info card below to know more
				</div>
				<ToiletList/>
			</div>
		);

	}
}
