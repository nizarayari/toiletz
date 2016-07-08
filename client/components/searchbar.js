import React from 'react';
import { connect } from 'react-redux';
import { Field, Form } from 'react-redux-form';

class SearchBar extends React.Component {
  handleSubmit(val) {
    // Do anything you want with the form value
    console.log(val);
  }

  render() {
    let { search } = this.props;

    return (
      <Form model="search" onSubmit={(val) => this.handleSubmit(val)}>
        <Field model="search.val">
          <input type="text" />
        </Field>
        <button>Submit!</button>
      </Form>
    );
  }
}

export default connect(state => ({ search: state.search }))(SearchBar);