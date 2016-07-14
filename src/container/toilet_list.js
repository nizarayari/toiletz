import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { SelectToilet } from '../actions/index';

class ToiletList extends Component{

	
	renderList(){
		console.log("inside renderList", this.props.toilets)
		if(typeof this.props.toilets === "string"){
			console.log("inside if")
			return (
				 	<div>
        				<h3>{this.props.toilets}</h3>
        			</div>
			)
	}
		
		return this.props.toilets.map((toilet, index) => {
			return (
				
				<li 
				onClick={()=> this.props.selectToilet(toilet)}
				style={{cursor:'pointer'}}
				key={index}>
				{toilet.description}
				</li>
				
			)
		});
	
	}

	render (){
		if(!this.props.toilets){
      		return null;
    	}
   
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

function mapDispatchToProps(dispatch){
  //Whenever SearchVal is called, the result should be passed to
  //all of our reducers
  return bindActionCreators({selectToilet:SelectToilet},dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(ToiletList);