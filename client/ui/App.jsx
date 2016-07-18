import React, {Component} from 'react';
import Header from './shared/Header.jsx';
import Footer from './shared/Footer.jsx';
import AuthBox from './auth/AuthBox.jsx';

export default class App extends Component {

  componentDidMount() {
    prepareCarouselsAndOtherShit();
  }

  render() {
    return (
      <div id="main">
        <div className="banner">
            <img src="img/banner.jpg" alt="баннер" />
        </div>
        <div className="content">
          <Header />
        </div>
        <div>
          {this.props.children}
        </div>
        <div className="content">
          <Footer />
        </div>
      </div>
    );
  }
}

function prepareCarouselsAndOtherShit() {
  $('.owl-carousel').owlCarousel({
      loop: true,
      items: 1,
      margin: 10,
      nav: true,
      navText: ["<", ">"],
      responsive: {
          0: {
              items: 1
          }
      }
  });

  $('.columns-video').owlCarousel({
      loop: true,
      items: 4,
      margin: 10,
      nav: true,
      pagination: true,
      navText: ["<", ">"],
      responsive: {
          0: {
              items: 2
          },
          960: {
              items: 4
          }
      }
  });
  $('.slider-bottom').owlCarousel({
      loop: true,
      items: 5,
      margin: 10,
      nav: true,
      pagination: true,
      navText: ["<", ">"],
      responsive: {
          0: {
              items: 2
          },
          960: {
              items: 5
          }
      }
  });

  $(".burger").on('click', function(){
      $('.small-menu').toggle();
      console.log("ok");
  });

  (function($){
      jQuery.fn.lightTabs = function(options){

          var createTabs = function(){
              tabs = this;
              i = 0;

              showPage = function(i){
                  $(tabs).children("div").children("div").hide();
                  $(tabs).children("div").children("div").eq(i).show();
                  $(tabs).children("ul").children("li").removeClass("active");
                  $(tabs).children("ul").children("li").eq(i).addClass("active");
              }

              showPage(0);

              $(tabs).children("ul").children("li").each(function(index, element){
                  $(element).attr("data-page", i);
                  i++;
              });

              $(tabs).children("ul").children("li").click(function(){
                  showPage(parseInt($(this).attr("data-page")));
              });
          };
          return this.each(createTabs);
      };
  })(jQuery);

  $(document).ready(function(){
      $(".tabs").lightTabs();
  });
}
