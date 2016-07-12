import React, {Component} from 'react';
import HomePage from './HomePage.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <div className='container'>
            {this.props.children}
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
