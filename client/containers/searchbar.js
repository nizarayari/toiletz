import React,{Component} from 'react';
import { connect } from 'react-redux';
//import { Field, Form } from 'react-redux-form';
import {Link} from 'react-router'
import {SearchVal} from '../action/index';
import {bindActionCreators} from 'redux';

class SearchBar extends Component {


  handleSubmit(val) {
    // Do anything you want with the form value

    console.log(val);
  }

  render() {
   

    return (
      <div>
      <input type="text"
      onChange={(event)=> this.props.searchVal(event.target.value)}
      ></input>
      <button> Submit </button>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    search:state.search
  }
}

//Anything returned from this function will end up as props
// on the SearchBar container
function mapDispatchToProps(dispatch){
  //Whenever SearchVal is called, the result should be passed to
  //all of our reducers
  return bindActionCreators({searchVal:SearchVal},dispatch)
}

//Promote SearchBar from a component to a container - it needs to know
// about this new dispatch method, searchVal. Make it available
// as a prop
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);