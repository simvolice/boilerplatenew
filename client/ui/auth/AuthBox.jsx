import React, {Component} from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';

export default class AuthBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(Meteor.userId()){
      return(
        <h1>Hello, {Meteor.userId()}</h1>
      );
    } else {
      return(
        <Login />
      );
    }    
  }
}