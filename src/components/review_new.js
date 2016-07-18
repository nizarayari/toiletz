import React,{ Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createReview } from '../actions/index';
import { Link } from 'react-router';
import {USER_ID} from '../actions/auth'

class ReviewsNew extends Component {
	//Navigating onSubmit
	static contextTypes = {
		router: PropTypes.object
	};
	
	onSubmit(props) {
		const toilet = this.props.toilet;
		const userId = USER_ID;
		console.log(USER_ID,"ID");
		this.props.createReview(props,toilet,userId)
			.then(() => {
				this.context.router.push('/')
			});
	}

	render(){
		const { fields:{description, rating}, handleSubmit,toilet } = this.props

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Create a new Review</h3>
				<div className={`form-group ${description.touched && description.invalid ? 'has-danger' : '' }`}>
					<label> Content </label>
					<textarea type="text" className='form-control' {...description}/>
					<div className='text-help'>
						{description.touched ? description.error : ''}
					</div>
				</div>

				<div className={`form-group ${rating.touched && rating.invalid ? 'has-danger' : '' }`}>
					<label> Rating /5</label>
					<input type="number" className='form-control' {...rating}/>
					<div className='text-help'>
						{rating.touched ? rating.error : ''}
					</div>
				</div>

				<button type='submit' className='btn btn-primary' >Submit</button>
				<Link to='/'> <button className='btn btn-danger' type='submit'>
				Cancel</button>
				</Link>
			</form>

		);
	}
}

//Form Validation

function validate(values){
	const errors = {};

	if(!values.description){
		errors.description = 'Enter a valid description'
	}

	if(!(values.rating) || values.rating>5 || values.rating<0){
		errors.rating = 'Enter a valid rating'
	}

	return errors;

}

function mapStateToProps(state){
	return {
		toilet: state.activeToilet, //from rootReducer (index.js in reducers)
		user: state.user
	}
}

export default reduxForm({
	form: 'ReviewsNewForm',
	fields: ['description','rating'],
	validate
},mapStateToProps,{ createReview })(ReviewsNew)

