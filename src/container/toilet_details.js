import React,{ Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { Link } from 'react-router';

class ToiletDetail extends Component{

	componentDidMount(){
		this.props.getReviews(this.props.toilet.id)
	}

	renderReviews(){
		console.log(this.props.reviews, "inside render Reviews")
		if (!!this.props.reviews){
			return (
				<li className='list-group-item'>
					<strong>No reviews for this toilet.</strong>
				</li>
			)
		}

		return this.props.reviews.map((review) => {
			return (
				<li className='list-group-item' key={review.id}>
					<span className='pull-xs-right'> {review.rating}/5</span>
					<strong>{review.description}</strong>
				</li>
			)
		})
	}

	renderLink(){
		if(this.props.auth){
			return (
				<Link to={'review_new'}>
					<button type='submit' className='btn btn-primary'>Add a review</button>
				</Link>
			)
		}
	}

	render(){
		if(!this.props.toilet){
			return <div>Select a toilet.</div>
		}


		return (
			<div claasName='top-margin'>
				<h3>Details for:</h3>
				<ul className='list-group'>
					<li className='list-group-item'>{this.props.toilet.name}</li>
					<li className='list-group-item'>{this.props.toilet.description}</li>
					<li className='list-group-item'>{this.props.toilet.address}</li>
				{this.renderReviews()}
				</ul>
				{this.renderLink()}
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		toilet: state.activeToilet, //from rootReducer (index.js in reducers)
		reviews: state.reviews,
		auth:state.auth.authenticated
	}
}
//   connect reducers and containers here
export default connect (mapStateToProps,actions)(ToiletDetail);

//reviews
//description
//rating
//name
//address

//<div>{this.props.toilet.reviews.map((review, index) => {
//					return (
//							<li>{review}</li>
//							)
//						}
//					)
//				}
//				</div>
