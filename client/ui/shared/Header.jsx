import React, {Component} from 'react';


export default class Header extends Component {
    
    componentDidMount(){

        $(".dropdown-button").dropdown();
        
    }
    
  render() {
    return (

        <div>
          {/* Dropdown Structure */}
          <ul id="dropdown1" className="dropdown-content">
            <li><a href="/addnews">Добавить новость</a></li>

          </ul>
          <nav>
            <div className="nav-wrapper">
              <a href="#!" className="brand-logo">Logo</a>
              <ul className="right hide-on-med-and-down">

                {/* Dropdown Trigger */}
                <li><a className="dropdown-button" href="#!" data-activates="dropdown1">Работа с новостями<i className="material-icons right">arrow_drop_down</i></a></li>
              </ul>

              <ul id="nav-mobile" className="side-nav">
                <li><a href="#">Navbar Link</a></li>
              </ul>
              <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>



            </div>
          </nav>
        </div>




    );
  }
}
