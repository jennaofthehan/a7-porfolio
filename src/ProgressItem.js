// Page of quotes to show
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

// PageOne Component
var ProgressItem = React.createClass({
	// Render a <Quote> element for each element in the state
	render() {
		var images = this.props.images.split(",");
		return (
			<ReactCSSTransitionGroup
							component="div"
							transitionName="pageTransition"
							transitionAppear={true}
      						transitionAppearTimeout={500}
							transitionEnterTimeout={500}
							transitionLeave={false}
						>
			<div className="group">
				<h1 className="productionGroup">{this.props.title}</h1>
				<p className="detail josephine">{this.props.detail}</p>
				{
					images.map(function(img, i){
						return(
							<img src={"imgs/"+img+".JPG"} key={i} className="progressPic"/>
							)
					})
				}
				<br/>
				<br/>
			</div>
			</ReactCSSTransitionGroup>
		);
	}
});

export default ProgressItem;