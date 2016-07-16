import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

export const NewsRecords = new Mongo.Collection('news_records');

if(Meteor.isServer) {
  Meteor.publish('news_records', () => {
    return NewsRecords.find();
  });

  NewsRecords.allow({
    'insert': function (userId,doc) {
      console.log('NewsRecords User with id : '+userId);
      return true; 
    }
  });

}
