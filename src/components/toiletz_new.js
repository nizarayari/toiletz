import React,{ Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createToilet } from '../actions/index';
import { Link } from 'react-router';
import {USER_ID} from '../actions/auth';

class ToiletzNew extends Component {
	//Navigating onSubmit
	static contextTypes = {
		router: PropTypes.object
	};
	
	onSubmit(props) {
		const userId = USER_ID;
		this.props.createToilet(props,userId)
			.then(() => {
				// toilet post has been created, navigate the user to the index
				// we navigate by calling this.context.router.push with
				// new path to navigate to.
				this.context.router.push('/')
			});
	}

	render(){
		const { fields:{name, description, address}, handleSubmit } = this.props
		// const handleSubmit = this.props.handleSubmit
		//const title = this.props.fields.title

		return (
			<div className="top-margin">
				<div className="container">
					<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
						<h3>Create a new Toilet</h3>
						<div className={`form-group ${name.touched && name.invalid ? 'has-danger' : '' }`}>
							<label> Name </label>
							<input type="text" className='form-control' {...name}/>
							<div className='text-help'>
								{name.touched ? name.error : ''}
							</div>
						</div>

						<div className={`form-group ${description.touched && description.invalid ? 'has-danger' : '' }`}>
							<label> Description </label>
							<input type="text" className='form-control' {...description}/>
							<div className='text-help'>
								{description.touched ? description.error : ''}
							</div>
						</div>

						<div className={`form-group ${address.touched && address.invalid ? 'has-danger' : '' }`}>
							<label> Address </label>
							<input type="text" className='form-control' {...address}/>
							<div className='text-help'>
								{address.touched ? address.error : ''}
							</div>
						</div>

						<button type='submit' className='btn btn-success' >Submit</button>
						<Link to='/'> <button className='btn btn-danger' type='submit'>
						Cancel</button>
						</Link>
					</form>
				</div>
			</div>

		);
	}
}

//Form Validation

function validate(values){
	const errors = {};

	if(!values.name){
		errors.name = 'Enter a valid name'
	}

	if(!values.description){
		errors.description = 'Enter a valid description'
	}

	if(!values.address){
		errors.address = 'Enter a valid address'
	}


	return errors;

}

//connect: 1st arg is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st arg is form, 2nd is mapStateToProps,3rd is mapDispatchToProps

export default reduxForm({
	form: 'ToiletzNewForm',
	fields: ['name','description','address'],
	validate
},null,{ createToilet })(ToiletzNew)

//user types something in....record it on application state

// state ==={
// 	form:{
// 		ToiletzNewForm:{
// 			name:'.....',
// 			description:'.....',
// 			address:'.......'
// 		}
// 	}
// }