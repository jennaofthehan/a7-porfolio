// Page of quotes to show
import React from 'react';
import ProgressItem from './ProgressItem';
import Baby from 'babyparse';

import $ from 'jquery';

// PageOne Component
var Progress = React.createClass({
	getInitialState(){
		return{progress:[]}
	},

	componentDidMount(){
		$.get('data/progress.csv').then(function(data){
			var parsed = Baby.parse(data, {header:true});
			this.setState({progress: parsed.data})
		}.bind(this));
	},
	// Render a <Quote> element for each element in the state
	render() {
		return (
			<div>
				{
					this.state.progress.map(function(progress, i){
						return (
							<ProgressItem key={'item-'+i} 
									title={progress.title}
									detail={progress.detail}
									images={progress.images}/>
							)
					})
				}
			</div>
		);
	}
});

export default Progress;