// Page of quotes to show
import React from 'react';
import './css/index.css';

// PageOne Component
var CastMember = React.createClass({
	// Render a <Quote> element for each element in the state
	render() {
		var source = "imgs/"+this.props.pic+".jpg";
		return (
			<div className="card">
				<img src={source} role="presentation" className="profilePic"/>
				<h3 className="castName">{this.props.name}</h3>
				<p>{this.props.role}</p>
			</div>
		);
	}
});

export default CastMember;