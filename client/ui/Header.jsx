import React, {Component} from 'react';
import Nav from './Nav.jsx';
import SideNav from './SideNav.jsx';


export default class Header extends Component {
  componentDidMount() {
    $(".button-collapse").sideNav();
  }
  render() {
    return (
      <header>
        <Nav />
        <SideNav />
      </header>
    );
  }
}
