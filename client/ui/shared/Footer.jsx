import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="cell-2">
          <img src="img/logo-2.png" alt="Нур отан логотип" className="logo2" />
        </div>
        <div className="block-top-right">
          <input type="text" placeholder="Я ищу..." className="search" />
          <span className="social">
            <a href="#twitter" className="twitter" />
            <a href="#facebook" className="facebook" />
            <a href="#google-plus" className="google-plus" />
            <a href="#youtube" className="youtube" />
            <a href="#rss" className="rss" />
          </span>
        </div>
        <div className="copright">
          <span>© 2016  Партия “Нұр Отан”. Все права защищены.</span>
        </div>
      </footer>
    );
  }
}
