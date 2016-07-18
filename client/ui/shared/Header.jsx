import React, {Component} from 'react';
import { browserHistory } from 'react-router'
import LogoutButton from '../auth/LogoutButton.jsx';

export default class Header extends Component {
    logout(){
      Meteor.logout(function(err){
        browserHistory.go('/');
      });
    }

    componentDidMount(){
      $(".dropdown-button").dropdown();
    }

  render() {
    return (

        <div>
          {/* Dropdown Structure */}
          <ul id="news_dropdown" className="dropdown-content">
            <li><a href="/addnews">Добавить новость</a></li>
          </ul>

          <ul id="complaints_dropdown" className="dropdown-content">
            <li><a href="/addcomplaint">Добавить жалобу</a></li>
          </ul>

          <ul id="blogs_dropdown" className="dropdown-content">
            <li><a href="/addblogrecord">Добавить в блог</a></li>
          </ul>          

          <nav>
            <div className="nav-wrapper">
              <a href="#!" className="brand-logo">CMS</a>
              <ul className="right hide-on-med-and-down">

                {/* Dropdown Trigger */}
                <li><a className="dropdown-button" href="#!" data-activates="complaints_dropdown">Работа с жалобами<i className="material-icons right">arrow_drop_down</i></a></li>
                <li><a className="dropdown-button" href="#!" data-activates="news_dropdown">Работа с новостями<i className="material-icons right">arrow_drop_down</i></a></li>
                <li><a className="dropdown-button" href="#!" data-activates="blogs_dropdown">Блог<i className="material-icons right">arrow_drop_down</i></a></li>
                <li>
                  <LogoutButton className="button" />
                </li>
              </ul>

              <ul id="nav-mobile" className="side-nav">
                <li><a href="#">Navbar Link</a></li>
              </ul>
              <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>

            </div>
          </nav>
        </div>




    );
  }
}
