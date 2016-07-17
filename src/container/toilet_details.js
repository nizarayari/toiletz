import React,{ Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { Link } from 'react-router';

class ToiletDetail extends Component{

	componentDidMount(){
		this.props.getReviews(this.props.toilet.id)
	}

	renderReviews(){
		let reviewsObj = this.props.reviews;
		let reviewsArray = [];
		if (reviewsObj) {
			for(var prop in reviewsObj) {
				reviewsArray.push(reviewsObj[prop]);
			}
			return reviewsArray.map((review) => {
				return (
					<div>
						<ul className='list-group' key={review.id}>
							<li className='list-group-item'>
								<div><h5>{review.rating}/5</h5></div>
								<div><strong>{review.description}</strong></div>
							</li>
						</ul>
					</div>
				);
			})	
		} else {
			return (
				<li className='list-group-item'>
					<strong>No reviews for this toilet.</strong>
				</li>
			)
		}

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
			<div>
				<h3>Details for:</h3>
				<ul className='list-group'>
					<li className='list-group-item'>{this.props.toilet.name}</li>
					<li className='list-group-item'>{this.props.toilet.description}</li>
					<li className='list-group-item'>{this.props.toilet.address}</li>
				</ul>
				<div>
				<h3>Reviews</h3> 
					{this.renderReviews()}
				</div>
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
