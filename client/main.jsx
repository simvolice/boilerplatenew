import App from './ui/App.jsx';
import HomePage from './ui/HomePage.jsx';
import Login from './ui/Login.jsx';

import React from 'react';
import ReactRouter from 'react-router';
import ReactDOM from 'react-dom';

const {Router, Route, IndexRoute, browserHistory} = ReactRouter;

Meteor.startup(function() {
  const root = document.createElement('div');
  root.setAttribute('id', 'root');
  document.body.appendChild(root);

  ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/home" component={HomePage} />
        <Route path="/login" component={Login} />
      </Route>
    </Router>
  ), root);
});
