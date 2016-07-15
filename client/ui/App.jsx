import React, {Component} from 'react';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import AuthBox from './auth/AuthBox.jsx';

export default class App extends Component {

  render() {
    return (
      <div>
        
        
       <Header />

        
        <div className="container">
          <AuthBox />
          {this.props.children}

          
        </div>
        
        
        
      <Footer />
        
        
      </div>
    );
  }
}
