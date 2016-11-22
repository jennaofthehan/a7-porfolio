// Application
import React from 'react';
import './css/index.css';
import { Link } from 'react-router';
import '../node_modules/font-awesome/css/font-awesome.css'


var App = React.createClass({
	render() {
		// Return links and show anything inside the <App> component (children)
		return (
				<div className="App">
					<div className="navbar">
						<Link className="link" activeClassName='active' to="/"><i className="fa fa-home"></i></Link>
						<Link className="link" activeClassName='active' to="/Cast">Cast</Link>
						<Link className="link" activeClassName='active' to="/Progress">Progress</Link>
					</div>
					<div className="children">
						<ReactCSSTransitionGroup
							component="div"
							transitionName="pageTransition"
							transitionEnterTimeout={500}
							transitionLeaveTimeout={400}
						>
							{React.cloneElement(this.props.childer, {
								key:location.pathname
							})}
						
						</ReactCSSTransitionGroup>
					</div>
				</div>
		);
	}
});

export default App;