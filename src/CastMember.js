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
			<div className="card">
				<ReactCSSTransitionGroup
								component="div"
								transitionName="pageTransition"
								transitionAppear={true}
	      						transitionAppearTimeout={500}
								transitionEnterTimeout={500}
								transitionLeave={false}
							>
					<img src={source} role="presentation" className="profilePic"/>
					<h2 className="castName">{this.props.name}</h2>
					<p className="role">{this.props.role}</p>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
});

export default CastMember;