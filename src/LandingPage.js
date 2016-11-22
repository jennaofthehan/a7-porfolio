// Page of quotes to show
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

// PageOne Component
var LandingPage = React.createClass({
	// Render a <Quote> element for each element in the state
	render() {
		return (
			<ReactCSSTransitionGroup
							component="div"
							transitionName="pageTransition"
							transitionAppear={true}
      						transitionAppearTimeout={500}
							transitionEnterTimeout={500}
							transitionLeave={false}
						>
			<div className="landingPage">
				<h1>Project Elle</h1>
				<p>We are a group of students in animation working to produce a short animated film!</p> 
				
				<p>Feel free to track our progress as you wait for our final video </p>
				<img src="imgs/concept1.jpg" role="presentation"/>
			</div>
			</ReactCSSTransitionGroup>
		);
	}
});

export default LandingPage;