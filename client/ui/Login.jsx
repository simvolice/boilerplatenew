import React, {Component} from 'react';
import TextField from 'material-ui/TextField';


export default class Login extends Component {
  render() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="col s12">
              <TextField hintText="Имя пользователя"/>
            </div>
            <div className="col s12">
              <TextField
                  hintText="Пароль"
                  
                  type="password"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
