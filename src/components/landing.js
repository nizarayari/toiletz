import React from 'react';
import { Component } from 'react';

export default class Index extends Component{

	render(){

		return(
		<div className="intro-background-img">
			<div className="intro-header">
		        <div className="container">
		            <div className="row">
		                <div className="col-lg-12">
		                    <div className="intro-message">
		                        <h1>Toiletz</h1>
		                        <h3>Because we all gotta go when we gotta go</h3>
		                        <hr className="intro-divider"></hr>
		                        <h4 className="text-default">Get the source code</h4>
		                        <ul className="list-inline intro-social-buttons">
		                            <li>
		                                <a href="https://github.com/toiletz/toiletz" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
		                            </li> 
		                        </ul>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
		);

	}
}