import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Categories = new Mongo.Collection('categories');
export const Regions = new Mongo.Collection('regions');

Meteor.startup(() => {
  // seed admin user on startup
  if(Meteor.users.find().count() == 0)
    Accounts.createUser({username: 'corehook', email: 'corehook@gmail.com', password: 'corehook', profile: {name: 'corehook'}})

  Regions.insert([
  {
    name_ru: "Акмолинская область",
    districts_ru: ["Есильский район", "Алматинский район"]
  },
  {
    name_ru: "Алматинская область",
    districts_ru: ["Есильский район", "Алматинский район"]
  },
  ]);

  Categories.insert([
  {
    name_ru: "Образование",
    sub_category_ru: ["Школьное образование", "Дошкольное образование"]
  },
  {
    name_ru: "Здравоохранение",
    sub_category_ru: ["Детское здравоохранение", "Взрослое здравоохранение"]
  },
  ]);
});
