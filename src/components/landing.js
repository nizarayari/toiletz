import React from 'react';
import { Component } from 'react';

export default class Index extends Component{

	render(){

		return(
		<div id="parent">
			<div className="intro-background-img">
				<div className="intro-header">
			        <div className="container">
			            <div className="row">
												<div className="main">
			                    <div className="intro-message">
														<div className="intro-panel">
			                        <h1>Toiletz</h1>
			                        <h3>Becasuse we all gotta go when we gotta go</h3>
			                        <hr className="divider"></hr>
			                        <h4 className="text-default">Get the source code</h4>
                                <a href="https://github.com/toiletz/toiletz" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
															</div>
														</div>

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
		                    <img className="img-responsive intro-secondary" src="src/assets/sky-high.jpg" alt=""></img>
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
		                    <img className="img-responsive intro-secondary" src="src/assets/tv-bath.jpg" alt=""></img>
		                </div>
		            </div>
		        </div>
   			</div>
		</div>
		);

	}
}
