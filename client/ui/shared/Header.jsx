import React, {Component} from 'react';
import { browserHistory } from 'react-router'
import LogoutButton from '../auth/LogoutButton.jsx';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router';
export default class Header extends Component {


    constructor(props) {
        super(props);

        this.styles = {
            header: {
                marginBottom: 20
            }
        };

    }


        logout(){
      Meteor.logout(function(err){
        browserHistory.go('/');
      });
    }

    componentDidMount(){
      $(".dropdown-button").dropdown();
        $(".button-collapse").sideNav();
    }

  render() {
    return (

        <div style={this.styles.header}>
          {/* Dropdown Structure */}
          <ul id="news_dropdown" className="dropdown-content">
            <li><Link to="/addnews">Добавить новость</Link></li>
          </ul>


          <ul id="complaints_dropdown" className="dropdown-content">

              <li><Link to="/addcomplaint">Подать обращение</Link></li>
          </ul>

          <ul id="blogs_dropdown" className="dropdown-content">

              <li><Link to="/addblogrecord">Добавить запись в блог</Link></li>
          </ul>

          <nav>
            <div className="nav-wrapper">
              <a href="#!" className="brand-logo">Управление сайтом НУРОТАН</a>
              <ul className="right hide-on-med-and-down">

                {/* Dropdown Trigger */}
                <li><a className="dropdown-button" href="#!" data-activates="news_dropdown">Работа с новостями<i className="material-icons right">arrow_drop_down</i></a></li>
                <li><a className="dropdown-button" href="#!" data-activates="blogs_dropdown">Блог<i className="material-icons right">arrow_drop_down</i></a></li>
                <li>
                  <LogoutButton className="button" />
                </li>
              </ul>

              <ul id="nav-mobile" className="side-nav">
                  <li><a href="/addblogrecord">Добавить запись в блог</a></li>
                  <li><a href="/addcomplaint">Добавить жалобу</a></li>
                  <li><a href="/addnews">Добавить новость</a></li>
              </ul>
              <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>

            </div>
          </nav>
        </div>




    );
  }
}
