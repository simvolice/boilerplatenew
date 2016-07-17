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
        null
      );
    } else {
      return(
        <div className="col s3 m3">
          <div className="card">
            <div className="card-content white-text">
              <Login />
            </div>
          </div>          
        </div>
      );
    }    
  }
}