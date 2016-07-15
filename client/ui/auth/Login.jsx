import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { browserHistory } from 'react-router'

export default class Login extends Component {

  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }
  
  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  _handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.onSubmit(e);
    }
  }  

  onSubmit(e) {
    e.preventDefault();
    
    if(!this.state.email || !this.state.password)
      return

    Meteor.loginWithPassword(this.state.email, this.state.password, function(error){
      browserHistory.push('/addnews')
    });


  }

  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.onSubmit}>
          <div className="row">

            <div className="col s12">
              <TextField hintText="Имя пользователя" id='email' onChange={this.handleEmailChange.bind(this)}/>
            </div>

            <div className="col s12">
              <TextField hintText="Пароль" type="password" id='password' onChange={this.handlePasswordChange.bind(this)} onKeyPress={this._handleKeyPress.bind(this)}/>
            </div>

            <div className="col s12">
              <FlatButton label="Войти" onClick={this.onSubmit.bind(this)}/>
            </div>
          </div>
        </form>
      </div>
  );
  }
}
