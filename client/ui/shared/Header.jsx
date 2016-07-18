import React, {Component} from 'react';
import { browserHistory } from 'react-router'
import LogoutButton from '../auth/LogoutButton.jsx';

export default class Header extends Component {
  componentDidMount(){ $(".dropdown-button").dropdown() }

  render() {
    return (
      <header>
        <div id="logo" className="cell-2">
          <img src="img/logo.png" alt="Нур отан логотип" />
        </div>
        <div className="on-menu cell-10">
          <div className="left-on-menu">
            <div className="block-top-right">
              <span className="date">
                <strong><i>11 июля, 2016</i></strong>
              </span>
              <span className="language">
                <i>KZ</i>
                <i className="active">RU</i>
                <i>EN</i>
              </span>
              <span className="tel">
                <img src="img/icons/tel.png" alt="telephone" />
              </span>
              <span>
                <img src="img/icons/glasses.png" alt="glasses" />
              </span>
            </div>
          </div>
          <div className="right-on-menu">
            <div className="block-top-right right">
              <input type="text" placeholder="Я ищу..." className="search" />
              <span className="social">
                <a href="#twitter" className="twitter" />
                <a href="#facebook" className="facebook" />
                <a href="#google-plus" className="google-plus" />
                <a href="#youtube" className="youtube" />
                <a href="#rss" className="rss" />
              </span>
              <span className="login">
                <span>
                  <a href="#sign">
                    <img src="img/icons/login.png" alt="Войти" />
                    <i>Войти</i>
                  </a>
                </span>
                <span><a href="/registration"><i>Регистрация</i></a></span>
              </span>
            </div>
          </div>
        </div>
        <div className="menu cell-10">
          <ul className="big-menu">
            <li><a href="#" className="active">Главная</a></li>
            <li><a href="#">Партия</a></li>
            <li><a href="#">Фракция</a></li>
            <li><a href="#">Новости</a></li>
            <li><a href="#">Программные документы</a></li>
            <li><a href="#">Регионы</a></li>
            <li><a href="#">Общественная приемная</a></li>
            <li className="last"><a href="#"><span>Еще</span> <img src="img/icons/burger.png" alt="burger" /></a></li>
            <li className="burger"><a href="#"><img src="img/icons/burger.png" alt="burger" /></a></li>
          </ul>
          <ul className="small-menu">
            <li><a href="#" className="active">Главная</a></li>
            <li><a href="#">Партия</a></li>
            <li><a href="#">Фракция</a></li>
            <li><a href="#">Новости</a></li>
            <li><a href="#">Программные документы</a></li>
            <li><a href="#">Регионы</a></li>
            <li><a href="#">Общественная приемная</a></li>
          </ul>
        </div>
      </header>
    );
  }
}
