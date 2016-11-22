// Page of quotes to show
import React from 'react';
import './css/index.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

// PageOne Component
var CastMember = React.createClass({
	// Render a <Quote> element for each element in the state
	render() {
		var source = "imgs/"+this.props.pic+".jpg";
		return (
			<ReactCSSTransitionGroup
							component="div"
							transitionName="pageTransition"
							transitionAppear={true}
      						transitionAppearTimeout={500}
							transitionEnterTimeout={500}
							transitionLeave={false}
						>
			<div className="card">
				<img src={source} role="presentation" className="profilePic"/>
				<h2 className="castName">{this.props.name}</h2>
				<p>{this.props.role}</p>
			</div>
			</ReactCSSTransitionGroup>
		);
	}
});

export default CastMember;