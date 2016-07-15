import React, {Component} from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';

export default class AuthBox extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    console.log('UserList constructor called');
  }

  render() {
    if(Meteor.userId()){
      return(
        <Logout />
      );
    } else {
      return(
        <Login />
      );
    }    
  }
}