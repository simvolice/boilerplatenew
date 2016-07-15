import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import { browserHistory } from 'react-router'

export default class Logout extends Component {
  logout() {
    if(!Meteor.userId())
      return false

<<<<<<< HEAD:client/ui/Logout.jsx
    console.log('LOgging out wiz '+Meteor.userId());
    Meteor.logout();
=======
    Meteor.logout(function(err){
      browserHistory.push('/')
    });
    
>>>>>>> cd90720cd987999033e1a4c1868faeb8c7a82c59:client/ui/auth/Logout.jsx
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
