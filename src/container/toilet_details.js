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

				<div>{this.props.toilet.reviews.map((review, index) => {
					return (
							<li>{review}</li>
							)
						}
					)
				}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		toilet:state.activeToilet //from rootReducer (index.js in reducers)
	}
}
//   connect reducers and containers here
export default connect (mapStateToProps)(ToiletDetail);

//reviews
//description
//rating
//name
//address
