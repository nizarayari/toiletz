import React from 'react';
import { Component } from 'react';

export default class Index extends Component{

	render(){

		return(
		<div id="parent">
			<div className="intro-background-img">
				<div className="intro-header">
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

		    <div className="content-section-b">
		        <div className="container">
		            <div className="row">
		                <div className="col-lg-5 col-sm-6">
		                    <hr className="section-heading-spacer"></hr>
		                    <div className="clearfix"></div>
		                    <h2 className="section-heading">Sometimes you can't wait...</h2>
		                    <p className="lead">First, enter the address you need to find releif at in the searchbar above. You can't miss it, it says "Find a toilet!"</p>
		                </div>
		                <div className="col-lg-5 col-lg-offset-2 col-sm-6">
		                    <img className="img-responsive" src="../assets/Number_1.png" alt=""></img>
		                </div>
		            </div>
		        </div>
		    </div>

		    <div className="content-section-b">
		        <div className="container">
		            <div className="row">
		                <div className="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
		                    <hr className="section-heading-spacer"></hr>
		                    <div className="clearfix"></div>
		                    <h2 className="section-heading">We have all been there...</h2>
		                    <p className="lead">Next, check the map and toilet list below it to find the best place for you. Once found simply click on a toilet!</p>
		                </div>
		                <div className="col-lg-5 col-sm-pull-6  col-sm-6">
		                    <img className="img-responsive" src="../assets/Number_2.png" alt=""></img>
		                </div>
		            </div>
		        </div>
   			</div>
		</div>
		);

	}
}