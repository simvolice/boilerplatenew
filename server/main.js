import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // seed admin user on startup
  if(Meteor.users.find().count() == 0)
    Accounts.createUser({username: 'corehook', email: 'corehook@gmail.com', password: 'corehook', profile: {name: 'corehook'}})
});
