// Page of quotes to show
import React from 'react';
import './css/index.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

// PageOne Component
var StoryStep = React.createClass({

	// Render a <Quote> element for each element in the state
	render() {
		return (
			<div className="stepsDiv">
					<p className="beginning">{this.props.beginning}</p> 
					<p className="step">{this.props.step}</p>
			</div>
		);
	}
});

export default StoryStep;