import React, {Component} from 'react';
import {connect} from 'react-redux'

class ToiletList extends Component{

	renderList(){
		return this.props.toilets.map((toilet,index) => {
			return (
				
				<li key={index}>
				{toilet.name}
				</li>
				
			)
		});
	}

	render (){
		return (
				<ul> {this.renderList()}</ul>
			)
	}
}

function mapStateToProps(state){
	return {
		toilets:state.toilets
	}
}

export default connect (mapStateToProps)(ToiletList);