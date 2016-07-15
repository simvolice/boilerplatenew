import React, {Component} from 'react';
import { browserHistory } from 'react-router'
import LogoutButton from '../auth/Logout.jsx';

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
          <ul id="dropdown1" className="dropdown-content">
            <li><a href="/addnews">Добавить новость</a></li>

          </ul>
          <nav>
            <div className="nav-wrapper">
              <a href="#!" className="brand-logo">Logo</a>
              <ul className="right hide-on-med-and-down">

                {/* Dropdown Trigger */}
                <li><a className="button" href="/addcomplaint">Жалобы</a></li>
                <li><a className="dropdown-button" href="#!" data-activates="dropdown1">Работа с новостями<i className="material-icons right">arrow_drop_down</i></a></li>
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
