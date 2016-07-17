import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import { browserHistory } from 'react-router'

export default class Logout extends Component {
  logout() {
    if(!Meteor.userId())
      return false

    Meteor.logout(function(err){
      browserHistory.push('/');
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

class LogoutButton extends Component {

  constructor(props)  {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if(Meteor.userId()){ Meteor.logout(function(err){ browserHistory.push('/') }) }
  }

  render(){
    if(Meteor.userId()){
      return(
        <a href='' className="button" onClick={this.handleClick}>Выход</a>
        )
    } else  {
      return null
    }
  }
}
