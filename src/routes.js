
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app'
import Home from './containers/home'

const Routes = () => (
    <Router history={browserHistory}>
        <Route component={App}>
            <Route path="/" component={Home} />
        </Route>
    </Router>
);

export default Routes