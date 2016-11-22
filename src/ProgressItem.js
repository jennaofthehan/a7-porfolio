// Page of quotes to show
import React from 'react';

// PageOne Component
var ProgressItem = React.createClass({
	// Render a <Quote> element for each element in the state
	render() {
		var images = this.props.images.split(",");
		return (
			<div className="group">
				<h2 className="productionGroup">{this.props.title}</h2>
				<p className="detail">{this.props.detail}</p>
				{
					images.map(function(img, i){
						return(
							<img src={"imgs/"+img+".jpg"} key={i} className="progressPic"/>
							)
					})
				}
			</div>
		);
	}
});

export default ProgressItem;