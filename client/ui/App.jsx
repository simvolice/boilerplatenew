import React, {Component} from 'react';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';

export default class App extends Component {
  AuthBox() {
    if(Meteor.userId()){
      return <Logout />
    } else {
      return <Login />
    }
  }

  render() {
    return (
      <div>
        
        
       <Header />

        
        <div className="container">
          {this.AuthBox()}
          {this.props.children}

          
        </div>
        
        
        
      <Footer />
        
        
      </div>
    );
  }
}
