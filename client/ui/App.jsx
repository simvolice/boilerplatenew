import React, {Component} from 'react';

import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default class App extends Component {

  

  render() {
    return (
      <div>
        
        
       <Header />

        
        <div className="container">
          
          {this.props.children}
          
        </div>
        
        
        
      <Footer />
        
        
      </div>
    );
  }
}
