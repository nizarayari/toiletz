import { Link } from 'react-router';
import { connect } from  'react-redux';
import React, { Component } from 'react';
import * as actions from '../actions/index';


class SignIn extends Component {

	constructor(props) {
		super(props);

		this.state = { 
			name: "",
			pwd: ""
		};

		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	

	onFormSubmit(event) {
		//this.props.search(this.state.term);
		this.setState({ 
			name: "", 
			pwd: ""
		});
	}

    render() {

	    return (
	    <div className="top-margin">
			<div className="container">
			  <div className="row">
			  	<div className="col-md-6">
			          <form className="form-horizontal" method="POST">
			          	<fieldset>
				            <div id="legend">
				              <legend className="">Sign In</legend>
				            </div>

				            <div className="control-group">
				              <label className="control-label">Username</label>
				              <div className="controls">
				                <input 
				                	className="form-control input-lg"
			    					type='text'
			    					placeholder="Type your username"
					      			value={this.state.name}
					      			onChange={(event)=> this.setState({ name: event.target.value })}
					      		/>
				              </div>
				            </div>
				         
				            <div className="control-group">
				              <label className="control-label">Password</label>
				              <div className="controls">
				                <input 
				                	className="form-control input-lg"
			    					type="password" 
			    					placeholder="Type your password"
					      			value={this.state.pwd}
					      			onChange={(event)=> this.setState({ pwd: event.target.value })}
			    				/>
				              </div>
				            </div>

				            <div className="control-group">
				              <div className="controls">
				              	<p>Don't have an account?<Link to={'sign_up'}><strong>Sign Up</strong></Link></p>
				                <button className="btn btn-success" onClick={this.onFormSubmit} type="submit">Login</button>
				              </div>
				            </div>
			         	</fieldset>
			        </form>
			    </div> 
			  </div>
			</div>
		</div>
	    );
    };
};


function mapStateToProps(state) {
	return {};
}

export default connect(mapStateToProps, actions)(SignIn);