import React, { Component } from 'react';
import Header from './header'
import Footer from './footer'



export default class App extends Component {
  render() {
    return (
      <div>
	      <h1>Toiletz</h1>
		      <Header />
		      {this.props.children}
		      <Footer />
      </div>
    );
  }
}
