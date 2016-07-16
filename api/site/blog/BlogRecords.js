import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

export const BlogRecords = new Mongo.Collection('blog_records');

if(Meteor.isServer) {
  Meteor.publish('blog_records', () => {
    return BlogRecords.find();
  });

  BlogRecords.allow({
    'insert': function (userId,doc) {
      return true; 
    }
  });

}
