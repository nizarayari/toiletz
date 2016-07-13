import { Link } from 'react-router';
import { connect } from  'react-redux';
import React, { Component } from 'react';
import * as actions from '../actions/index';


class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = { term: ""};

		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	

	onFormSubmit(event) {
		this.props.search(this.state.term);
		this.setState({ term: "" });
	}

    render() {
	    return (
	      <form >
		      <input 
		      	placeholder="Find a Toilet!"
		      	value={this.state.term}
		      	onChange={(event)=> this.setState({ term: event.target.value })}
		      />
		      <Link to={'home'}>
			      <span>
			      	<button className="btn-primary" onClick={this.onFormSubmit} type='submit'>Submit</button>
			      </span>
		      </Link>
	      </form>
	    );
    };
};


function mapStateToProps(state) {
	return {};
}

export default connect(mapStateToProps, actions)(SearchBar);