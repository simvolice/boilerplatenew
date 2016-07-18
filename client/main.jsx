import App from './ui/App.jsx';

import AddNews from './ui/news/AddNews.jsx';
import AddBlogRecord from './ui/blog/AddBlogRecord.jsx';
import AddComplaint from './ui/site/AddComplaint.jsx';
import Registration from './ui/site/Registration.jsx';

import ListNews from './ui/news/ListNews.jsx';

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

function requireAuth(nextState, replace) {
  if (!Meteor.userId())
    replace('/')
}

Meteor.startup(function() {

    //Настройки uploadcare
    UPLOADCARE_PUBLIC_KEY = 'f2ffd038e7774979768e';
    UPLOADCARE_IMAGES_ONLY = true;
    UPLOADCARE_LOCALE = 'ru';


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
                    <Route path="/addnews" component={AddNews} onEnter={requireAuth}/>
                    <Route path="/listnews" component={ListNews} />
                    <Route path="/addblogrecord" component={AddBlogRecord} onEnter={requireAuth}/>
                    <Route path="/addcomplaint" component={AddComplaint}/>
                    <Route path="/registration" component={Registration}/>
                  </Route>

              </Router>

          </IntlProvider>
      </MuiThemeProvider>


  ), root);
});
