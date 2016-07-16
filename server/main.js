import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Categories } from '../api/site/addComplaint/Categories.js';
import { Regions } from '../api/site/addComplaint/Regions.js';

Meteor.startup(() => {

  if(Meteor.users.find().count() == 0)
    Accounts.createUser({username: 'corehook', email: 'corehook@gmail.com', password: 'corehook', profile: {name: 'corehook'}})

  const regions = [
          {
            name_ru: "Акмолинская область",
            districts_ru: ["Есильский район", "Алматинский район"]
          },
          {
            name_ru: "Алматинская область",
            districts_ru: ["Есильский район", "Алматинский район"]
          },
        ],
      categories = [
        {
          name_ru: "Образование",
          sub_category_ru: ["Школьное образование", "Дошкольное образование"]
        },
        {
          name_ru: "Здравоохранение",
          sub_category_ru: ["Детское здравоохранение", "Взрослое здравоохранение"]
        },
      ];

  regions.forEach((region) => {
    Regions.insert(region);
  });

  categories.forEach((category) => {
    Categories.insert(category);
  });
});
