import React, {Component} from 'react';

export default class SideNav extends Component {
  render() {
    return (
      <nav>
        <ul className="right hide-on-med-and-down">
          <li><a href="#!">First Sidebar Link</a></li>
          <li><a href="#!">Second Sidebar Link</a></li>
        </ul>
        <ul id="slide-out" className="side-nav">
          <li><a href="#!">First Sidebar Link</a></li>
          <li><a href="#!">Second Sidebar Link</a></li>
        </ul>
        <a href="#" data-activates="slide-out" className="button-collapse"><i className="mdi-navigation-menu" /></a>
      </nav>
    );
  }
}
