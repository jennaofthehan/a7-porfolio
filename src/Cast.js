// Page of quotes to show
import React from 'react';
import CastMember from './CastMember';
import Baby from 'babyparse';
import $ from 'jquery';

// PageOne Component
var Cast = React.createClass({
	getInitialState(){
		return{cast:[]}
	},

	componentDidMount(){
		$.get('data/cast.csv').then(function(data){
			var parsed = Baby.parse(data, {header:true});
			this.setState({cast: parsed.data})
		}.bind(this));
	},
	// Render a <Quote> element for each element in the state
	render() {
		return (
			<div>
				{
					this.state.cast.map(function(member, i){
						return (
							<CastMember key={'member-'+i} 
									pic={member.pic}
									name={member.name}
									role={member.role}/>
							)
					})
				}
			</div>
		);
	}
});

export default Cast;