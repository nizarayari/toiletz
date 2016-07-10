import React,{ Component } from 'react';
import { connect } from 'react-redux';

class ToiletDetail extends Component{

	render(){
		if(!this.props.toilet){
			return <div>Select a toilet.</div>
		}


		return (
			<div>
				<h3>Details for:</h3>
				<div>{this.props.toilet.description}</div>
				<div>{this.props.toilet.description}</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		toilet:state.activeToilet //from rootReducer (index.js in reducers)
	}
}

export default connect (mapStateToProps)(ToiletDetail);

