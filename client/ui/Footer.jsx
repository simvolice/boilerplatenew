import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className='page-footer orange'>
        <div className="footer-copyright">
          <div className="container">
            © 2014-2016 Materialize, All rights reserved.
            <a className="grey-text text-lighten-4 right" href="https://github.com/Dogfalo/materialize/blob/master/LICENSE">MIT License</a>
          </div>
        </div>
      </footer>
    );
  }
}
