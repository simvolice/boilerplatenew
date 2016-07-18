import React, {Component, PropTypes} from 'react';

import {Meteor} from 'meteor/meteor';

const styles = {
  radioStyle: {
    float: 'left',
    display: 'inline-block'
  }
};

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div className="content">
          <div className="cell-6 cell-medium-12 last">
            <div className="large-block">
              <span className="category"><i>Политика</i></span>
              <img src="img/top-block/conference.jpg" alt="конференция" />
              <div className="topic">
                <h2>XVI съезд партии «Нур Отан» под председательством Главы государства</h2>
                <span className="date"><i>6 июля, 2016</i></span>
              </div>
            </div>
          </div>
          <div className="cell-6 cell-medium-12 last">
            <div className="cell-6">
              <div className="medium-block">
                <span className="category"><i>Политика</i></span>
                <img src="img/top-block/floar.jpg" alt="конференция" />
                <div className="topic">
                  <h2>Автопробег в Костанайской области</h2>
                  <span className="date"><i>6 июля, 2016</i></span>
                </div>
              </div>
            </div>
            <div className="cell-6">
              <div className="medium-block">
                <img src="img/top-block/partia.jpg" alt="партия" />
              </div>
            </div>
            <div className="cell-6">
              <div className="medium-block-2">
                <span className="category"><i>Спорт</i></span>
                <img src="img/top-block/politic.jpg" alt="политика" />
                <div className="topic">
                  <h2>В честь празднования Дня столицы жителям Павлодара подарили....</h2>
                  <span className="date"><i>6 июля, 2016</i></span>
                </div>
              </div>
            </div>
            <div className="cell-6">
              <div className="medium-block-2">
                <img src="img/top-block/electron.jpg" alt="Общественная Приемная" />
              </div>
            </div>
          </div>
          <div id="news">
            <div id="blocks-news" className="cell-8">
              <div className="theme">
                <h2><i>Новости</i></h2>
                <ul>
                  <li><a href="#">Все новости</a></li>
                  <li><a href="#">Новости регионов</a></li>
                  <li><a href="#">Пресс-релизы</a></li>
                  <li><a href="#">Анонсы</a></li>
                  <li><a href="#">Опрос</a></li>
                  <li><a href="#" className="active">Календарь <span className="calendar active" /></a></li>
                </ul>
              </div>
              <div className="medium-block">
                <span className="category"><i>Политика</i></span>
                <img src="img/center-block/obce.jpg" alt="обсе" />
                <div className="topic">
                  <h2>Делегация Казахстана выступила на сессии ПА ОБСЕ</h2>
                  <span className="date"><i>6 июля, 2016</i></span>
                  <span className="shared"><a href="#"><img src="img/icons/shared.png" alt="shared" /></a></span>
                </div>
              </div>
              <div className="medium-block">
                <span className="category"><i>Политика</i></span>
                <img src="img/center-block/region.jpg" alt="регион" />
                <div className="topic">
                  <h2>Автопробег в Костанайской области</h2>
                  <span className="date"><i>6 июля, 2016</i></span>
                  <span className="shared"><a href="#"><img src="img/icons/shared.png" alt="shared" /></a></span>
                </div>
              </div>
              <div className="news-block">
                <div className="line">
                  <img src="img/center-block/news-1.jpg" alt="новость" className="img-news" />
                  <div className="topic">
                    <h2>Автопробег «Ұлы Дала азаматтары» побывал в Павлодаре</h2>
                    <p>Участники автопробега «Ұлы Дала азаматтары» побывали в Павлодаре. Организованный «Советом
                      генералов» и поддержанный....</p>
                    <span className="date"><i>1 июля, 2016</i></span>
                    <span className="shared"><a href="#"><img src="img/icons/shared-grey.png" alt="shared" /></a></span>
                  </div>
                </div>
              </div>
              <div className="news-block">
                <div className="line">
                  <img src="img/center-block/news-2.jpg" alt="новость" className="img-news" />
                  <div className="topic">
                    <h2>В Майском районном филиале партии «Нұр Отан» обсудили вопросы медиации</h2>
                    <p>С недавних пор кабинеты медиации открыты в здании районного акимата района, и в акиматах
                      сельских округов в целях обеспечения работы....</p>
                    <span className="date"><i>1 июля, 2016</i></span>
                    <span className="shared"><a href="#"><img src="img/icons/shared-grey.png" alt="shared" /></a></span>
                  </div>
                </div>
              </div>
              <div className="news-block">
                <div className="line">
                  <img src="img/center-block/news-3.jpg" alt="новость" className="img-news" />
                  <div className="topic">
                    <h2>В Астане прошел митинг в рамках автопробега по городам Казахстана «Ұлы дала
                      азаматтары»</h2>
                    <p>Сегодня Астанинский городской филиал партии «Нұр Отан» организовал....</p>
                    <span className="date"><i>1 июля, 2016</i></span>
                    <span className="shared"><a href="#"><img src="img/icons/shared-grey.png" alt="shared" /></a></span>
                  </div>
                </div>
              </div>
              <div className="news-block">
                <div className="line">
                  <img src="img/center-block/news-4.jpg" alt="новость" className="img-news" />
                  <div className="topic">
                    <h2>В Атбасарском районе проходит акция "25 добрых дел»</h2>
                    <p>Активисты молодежного крыла «Жас Отан» Атбасарского района и молодежного центра очистили
                      от мусора двор и огород,...</p>
                    <span className="date"><i>1 июля, 2016</i></span>
                    <span className="shared"><a href="#"><img src="img/icons/shared-grey.png" alt="shared" /></a></span>
                  </div>
                </div>
              </div>
            </div>
            <div id="blog" className="cell-4">
              <div className="cell-12">
                <img src="img/center-block/blog.jpg" alt="блог" />
                <div className="tabs">
                  <ul>
                    <li>Комментари</li>
                    <li>
                      <span className="social">
                        <a href="#twitter" className="twitter" />
                      </span>
                      Twitter
                    </li>
                    <li>
                      <span className="social">
                        <a href="#facebook" className="facebook" />
                      </span>
                      Facebook
                    </li>
                  </ul>
                  <div>
                    <div>
                      <div className="comment">
                        <p>В Майском районном филиале партии обсудили вопросы медиации</p>
                        <span className="date">
                          <strong><i>11 июля, 2016</i></strong>
                        </span>
                        <span className="answer">
                          <strong><i>12</i></strong>
                        </span>
                      </div>
                      <div className="comment">
                        <p>В Майском районном филиале партии обсудили вопросы медиации</p>
                        <span className="date">
                          <strong><i>11 июля, 2016</i></strong>
                        </span>
                        <span className="answer">
                          <strong><i>12</i></strong>
                        </span>
                      </div>
                      <div className="comment">
                        <p>В Майском районном филиале партии обсудили вопросы медиации</p>
                        <span className="date">
                          <strong><i>11 июля, 2016</i></strong>
                        </span>
                        <span className="answer">
                          <strong><i>12</i></strong>
                        </span>
                      </div>
                    </div>
                    <div><p>Twitter api</p></div>
                    <div><p>Facebook api</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
        <div className="content-center">
          <div id="green-block">
            <div id="review">
              <h2 className="opinion"><i>Мнения</i></h2>
              <div className="yellow-block">
                <p>Все мнения</p>
                <img src="img/icons/quick.png" alt="комментари" className="quick" />
                <a href="#shred"><img src="img/icons/shared-black.png" alt="поделиться" className="shared-black" /></a>
              </div>
              <div className="persons">
                <div className="person">
                  <img src="img/person/person-1.jpg" alt="person" />
                  <div className="description">
                    <span>Вице-министр здравоохранения и социального развития РК</span>
                    <h2>Светлана Жакупова</h2>
                    <p>О внедрении адресной социальной помощи нового формата</p>
                  </div>
                </div>
              </div>
              <div className="persons">
                <div className="person">
                  <img src="img/person/person-2.jpg" alt="person" />
                  <div className="description">
                    <span>Член Фракции партии «Нұр Отан» в Мажилисе Парламента</span>
                    <h2>Нуртай Сабильянов</h2>
                    <p>О внедрении налогового декларирования доходов и расходов</p>
                  </div>
                </div>
              </div>
              <div className="persons">
                <div className="person">
                  <img src="img/person/person-3.jpg" alt="person" />
                  <div className="description">
                    <span>Член совета Ассамблеи народа Казахстана</span>
                    <h2>Анатолий Башмаков</h2>
                    <p>Манифест «Мир. XXI век» носит политический характер</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="slider-center">
              <div className="tabs">
                <ul>
                  <li>Проекты</li>
                  <li>ДИАЛОГОВЫЕ ПЛОЩАДКИ</li>
                </ul>
                <div>
                  <div className="slider-green">
                    <div className="owl-carousel">
                      <div className="item">
                        <img src="img/slider/ardagerler.jpg" alt="Ардагерлер" />
                        <h4>«БУДУЩЕЕ БЕЗ БАРЬЕРОВ»</h4>
                      </div>
                      <div className="item">
                        <img src="img/slider/ardagerler.jpg" alt="Ардагерлер" />
                        <h4>«БУДУЩЕЕ БЕЗ БАРЬЕРОВ»</h4>
                      </div>
                      <div className="item">
                        <img src="img/slider/ardagerler.jpg" alt="Ардагерлер" />
                        <h4>«БУДУЩЕЕ БЕЗ БАРЬЕРОВ»</h4>
                      </div>
                    </div>
                  </div>
                  <div className="slider-green">
                    <div className="owl-carousel">
                      <div className="item">
                        <img src="img/slider/ardagerler.jpg" alt="Ардагерлер" />
                      </div>
                      <div className="item"><img src="img/slider/ardagerler.jpg" alt="Ардагерлер" /></div>
                      <div className="item"><img src="img/slider/ardagerler.jpg" alt="Ардагерлер" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="videos">
          <h2><i>Видео</i></h2>
          <div className="columns-video">
            <div className="video item">
              <iframe src allowFullScreen />
              <p>Коротко о Плане нации - 100 конкретных шагов</p>
              <span className="date">
                <strong><i>11 июля, 2016</i></strong>
              </span>
              <span className="answer">
                <strong><i>12</i></strong>
              </span>
            </div>
            <div className="video item">
              <iframe src allowFullScreen />
              <p>Коротко о Плане нации - 100 конкретных шагов</p>
              <span className="date">
                <strong><i>11 июля, 2016</i></strong>
              </span>
              <span className="answer">
                <strong><i>12</i></strong>
              </span>
            </div>
            <div className="video item">
              <iframe src allowFullScreen />
              <p>Коротко о Плане нации - 100 конкретных шагов</p>
              <span className="date">
                <strong><i>11 июля, 2016</i></strong>
              </span>
              <span className="answer">
                <strong><i>12</i></strong>
              </span>
            </div>
            <div className="video item">
              <iframe src allowFullScreen />
              <p>Коротко о Плане нации - 100 конкретных шагов</p>
              <span className="date">
                <strong><i>11 июля, 2016</i></strong>
              </span>
              <span className="answer">
                <strong><i>12</i></strong>
              </span>
            </div>
            <div className="video item">
              <iframe src allowFullScreen />
              <p>Коротко о Плане нации - 100 конкретных шагов</p>
              <span className="date">
                <strong><i>11 июля, 2016</i></strong>
              </span>
              <span className="answer">
                <strong><i>12</i></strong>
              </span>
            </div>
            <div className="video item">
              <iframe src allowFullScreen />
              <p>Коротко о Плане нации - 100 конкретных шагов</p>
              <span className="date">
                <strong><i>11 июля, 2016</i></strong>
              </span>
              <span className="answer">
                <strong><i>12</i></strong>
              </span>
            </div>
            <div className="video item">
              <iframe src allowFullScreen />
              <p>Коротко о Плане нации - 100 конкретных шагов</p>
              <span className="date">
                <strong><i>11 июля, 2016</i></strong>
              </span>
              <span className="answer">
                <strong><i>12</i></strong>
              </span>
            </div>
            <div className="video item">
              <iframe src allowFullScreen />
              <p>Коротко о Плане нации - 100 конкретных шагов</p>
              <span className="date">
                <strong><i>11 июля, 2016</i></strong>
              </span>
              <span className="answer">
                <strong><i>12</i></strong>
              </span>
            </div>
          </div>
        </div>
        <div id="blocks-bottom" className="content">
          <h2><i>Фото</i></h2>
          <div className="black-block">
            <div className="cell-6 cell-medium-12 last">
              <div className="large-block">
                <img src="img/bottom-block/politic.jpg" alt="политик" />
                <div className="topic">
                  <h2>Церемония награждения лучших спортсменов по национальным видам спорта «Алтын Тұғыр -
                    2015»</h2>
                  <a href>
                    <img src="img/icons/instagram.png" alt="instagram" className="right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="cell-6 cell-medium-12 last">
              <div className="cell-6">
                <div className="medium-block">
                  <div className="category">
                    <a href><img src="img/icons/instagram.png" alt="instagram" /></a>
                  </div>
                  <img src="img/bottom-block/politic-2.jpg" alt="политик" />
                  <div className="topic">
                    <h2>Внеочередной Съезд партии “Нұр Отан”</h2>
                  </div>
                </div>
              </div>
              <div className="cell-6">
                <div className="medium-block">
                  <div className="category">
                    <a href><img src="img/icons/instagram.png" alt="instagram" /></a>
                  </div>
                  <img src="img/bottom-block/politic-3.jpg" alt="политик" />
                  <div className="topic">
                    <h2>Казахстанцы - Герои Советского Союза</h2>
                  </div>
                </div>
              </div>
              <div className="cell-6">
                <div className="medium-block-2">
                  <div className="category">
                    <a href><img src="img/icons/instagram.png" alt="instagram" /></a>
                  </div>
                  <img src="img/bottom-block/politic-4.jpg" alt="политик" />
                  <div className="topic">
                    <h2>“Большая Евразия: Территория диалога молодежи”</h2>
                  </div>
                </div>
              </div>
              <div className="cell-6">
                <div className="medium-block-2">
                  <div className="category">
                    <a href><img src="img/icons/instagram.png" alt="instagram" /></a>
                  </div>
                  <img src="img/bottom-block/politic-5.jpg" alt="политик" />
                  <div className="topic">
                    <h2>Республиканский конкурс "Лучшая первичная партийная организация"</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        <div className="slider-bottom">
          <div className="item">
            <a href="#">www.akorda.kz</a>
            <span>Официальный сайт Президента РК</span>
          </div>
          <div className="item">
            <a href="#">www.ipp.kz</a>
            <span>Официальный сайт Президента РК</span>
          </div>
          <div className="item">
            <a href="#">www.nurmedia.kz</a>
            <span>Официальный сайт Президента РК</span>
          </div>
          <div className="item">
            <a href="#">www.zhasotan.kz</a>
            <span>Официальный сайт Президента РК</span>
          </div>
          <div className="item">
            <a href="#">www.zhasotan.kz</a>
            <span>Официальный сайт Президента РК</span>
          </div>
          <div className="item">
            <a href="#">www.akorda.kz</a>
            <span>Официальный сайт Президента РК</span>
          </div>
          <div className="item">
            <a href="#">www.akorda.kz</a>
            <span>Официальный сайт Президента РК</span>
          </div>
        </div>
        <div className="clearfix" />
        <div className="menu-bottom">
          <ul>
            <li><a href="#" className="active">Главная</a></li>
            <li><a href="#">Партия</a></li>
            <li><a href="#">Фракция</a></li>
            <li><a href="#">Новости</a></li>
            <li><a href="#">Программные документы</a></li>
            <li><a href="#">Регионы</a></li>
            <li><a href="#">Общественная приемная</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
