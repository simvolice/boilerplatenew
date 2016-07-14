import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

export default class email extends Component {

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

  onSubmit(e) {
    e.preventDefault();
    console.log("SignIn with "+this.state.email);
    // // Here, we call an external AuthService. We’ll create it in the next step
    Meteor.loginWithPassword(this.state.email, this.state.password).catch(function(err) {
      console.log(err);
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
              <TextField hintText="Пароль" type="password" id='password' onChange={this.handlePasswordChange.bind(this)}/>
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
