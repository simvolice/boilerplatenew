import React, {Component} from 'react';
import { browserHistory } from 'react-router'

export default class LogoutButton extends Component {
  constructor(props)  {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if(Meteor.userId()){ 
      Meteor.logout(function(err){ browserHistory.push('/') }); 
    }
  }

  render(){
    if(Meteor.userId()){
      return( <a className="button" onClick={this.handleClick}>Выход</a> )
    } else  {
      return null
    }
  }
}
