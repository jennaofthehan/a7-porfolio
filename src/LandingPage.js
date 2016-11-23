// Page of quotes to show
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import StoryStep from './StoryStep';
import Baby from 'babyparse';
import $ from 'jquery';

// PageOne Component
var LandingPage = React.createClass({
	getInitialState(){
		return{story:[]}
	},

	componentDidMount(){
		$.get('data/story.csv').then(function(data){
			var parsed = Baby.parse(data, {header:true});
			this.setState({story: parsed.data})
		}.bind(this));
	},
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
				<h1><img className="star" src="imgs/star.png"/>Project Elle<img className="star" src="imgs/star.png"/></h1>
				<p className="josephine">We are a group of students in animation working to produce a short animated film!</p> 
				<p className="josephine">Feel free to track our progress as you wait for our final vid~ </p>
				
				<br/>
				<hr/>
			
			<div>
				{
					this.state.story.map(function(step, i){
							return (
								<StoryStep key={'step-'+i} 
										beginning={step.beginning}
										step={step.step}/>
								)
					})
				}
			</div>
			</div>
			</ReactCSSTransitionGroup>
		);
	}
});

export default LandingPage;