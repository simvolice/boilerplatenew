import React, {Component} from 'react';
import {NewsRecords} from '../../../api/site/news/NewsRecords.js';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class ListNews extends Component {

  constructor(props){
    super(props);

    this.state = {
      news: NewsRecords.find({})
    }
  }

  render_news(){
    return this.state.news.map((news) => (
      <b key={news.id}>{news.title}</b>
    ));    
  }

  render() {
    return (
      <div className="row">
          <div className="col s12">
            <div className="card white darken-1">
              {this.render_news()}
            </div>
          </div>
      </div>
    );
  }
}
