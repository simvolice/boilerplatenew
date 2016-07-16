import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

export const Regions = new Mongo.Collection('regions');

if(Meteor.isServer) {
  Meteor.publish('regions', () => {
    return Regions.find();
  });
}
