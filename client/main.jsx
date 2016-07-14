import App from './ui/App.jsx';

import AddNews from './ui/AddNews.jsx';
import AddBlogRecord from './ui/AddBlogRecord.jsx';

import Login from './ui/Login.jsx';

import React from 'react';
import ReactRouter from 'react-router';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';


import {addLocaleData, IntlProvider} from 'react-intl';

import enLocaleData from 'react-intl/locale-data/en';
import ruLocaleData from 'react-intl/locale-data/en';
import kkLocaleData from 'react-intl/locale-data/en';

const {Router, Route, IndexRoute, browserHistory} = ReactRouter;



Meteor.startup(function() {

    addLocaleData(enLocaleData);
    addLocaleData(ruLocaleData);
    addLocaleData(kkLocaleData);



    injectTapEventPlugin();

  const root = document.createElement('div');
  root.setAttribute('id', 'root');
  document.body.appendChild(root);

  ReactDOM.render((

      <MuiThemeProvider>
          <IntlProvider locale="ru">
              
              <Router history={browserHistory}>
                  <Route path="/" component={App}>
                      <Route path="/login" component={Login}/>
                      <Route path="/addnews" component={AddNews}/>
                      <Route path="/addblogrecord" component={AddBlogRecord}/>
                  </Route>
              </Router>

          </IntlProvider>
      </MuiThemeProvider>
      
      
  ), root);
});
