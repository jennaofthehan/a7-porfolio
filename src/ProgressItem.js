// Page of quotes to show
import React from 'react';

// PageOne Component
var ProgressItem = React.createClass({
	// Render a <Quote> element for each element in the state
	render() {
		var images = this.props.images.split(",");
		return (
			<div className="group">
				<h1 className="productionGroup">{this.props.title}</h1>
				<p className="detail">{this.props.detail}</p>
				{
					images.map(function(img, i){
						return(
							<img src={"imgs/"+img+".jpg"} key={i} className="progressPic"/>
							)
					})
				}
				<br/>
				<br/>
			</div>
		);
	}
});

export default ProgressItem;