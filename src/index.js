import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IndexRoute, Router, Route, Link, hashHistory } from 'react-router';
import './css/index.css';
import Cast from './Cast';
import Progress from './Progress';
import LandingPage from './LandingPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Render DOM -- wrapper in MuiThemeProvider for material-ui elements
ReactDOM.render(
	<MuiThemeProvider>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={LandingPage}/>
                <Route path="Cast" component={Cast}/>
                <Route path="Progress" component={Progress}/>
            </Route>
        </Router>
    </MuiThemeProvider>,

  document.getElementById('root')
);