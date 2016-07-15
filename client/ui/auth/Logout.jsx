import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import { browserHistory } from 'react-router'

export default class Logout extends Component {
  logout() { 
    if(!Meteor.userId())
      return false

    Meteor.logout(function(err){
      browserHistory.push('/')
    });
    
  }

  render(){
    return (
      <div className="row">
        <form className="col s12">
          <div className="col s12">
            <FlatButton label="Выйти" onClick={this.logout} />
          </div>
        </form>
      </div>
   )
  }
}