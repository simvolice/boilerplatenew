import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {NewsRecords} from '../../../api/site/news/NewsRecords.js';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Meteor} from 'meteor/meteor';

Meteor.subscribe('news_records');

export default class ListNews extends Component {
  constructor(props){
    super(props);
  }

  render_news(){
    return(
      this.props.news_records.map((news) => ( 
        <TableRow key={news._id}>
          <TableRowColumn>{news._id}</TableRowColumn>
          <TableRowColumn>{news.title}</TableRowColumn>
        </TableRow>
        )
      )
    )
  }

  render() {
    return (
      <div className="row">
          <div className="col s12">
           <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn>ID</TableHeaderColumn>
                  <TableHeaderColumn>Title</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
                {this.render_news()}
              </TableBody>
            </Table>          
          </div>
      </div>
    );
  }
}

ListNews.propTypes = {
  news_records: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    news_records: NewsRecords.find({}).fetch(),
  }
}, ListNews);