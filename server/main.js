import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Categories } from '../api/site/addComplaint/Categories.js';
import { Regions } from '../api/site/addComplaint/Regions.js';

Meteor.startup(() => {



  if(Meteor.users.find().count() == 0)
    Accounts.createUser({username: 'corehook', email: 'corehook@gmail.com', password: 'corehook', profile: {name: 'corehook'}})

  const regions = [
    {
      name_ru: "город Астана",
      districts_ru: []
    },
    {
      name_ru: "город Алматы",
      districts_ru: []
    },
    {
      name_ru: "Акмолинская область",
      districts_ru: ["г. Кокшетау", "г. Степногорск", "Аккольский район", "Aршалынский район", "Астраханский район", "Атбасарский район", "Буландынский район", "Егиндыкольский район", "Енбекшильдерский район", "Ерейментауский район", "Есильский район", "Жаксынский район", "Жаркаинский район", "Зерендинский район", "Коргалжынский район", "Сандыктауский район", "Целиноградский район", "Шортандинский район", "Бурабайский район"]
    },
    {
      name_ru: "Актюбинская область",
      districts_ru: ["г. Актобе", "Алгинский район", "Айтекебийский район", "Байганинский район", "Каргалинский район", "Хобдинский район", "Мартукский район", "Мугалжарский район", "Уилский район", "Темирский район", "Хромтауский район", "Шалкарский район", "Иргизский район"]
    },
    {
      name_ru: "Алматинская область",
      districts_ru: ["г. Талдыкорган", "г. Капчагай", "г. Текели", "Аксуский район", "Алакольский район", "Балхашский район", "Енбекшиказахский район", "Жамбылский район", "Кербулакский район", "Коксуский район", "Каратальский район", "Карасайский район", "Панфиловский район", "Райымбекский район", "Саркандский район", "Талгарский район", "Ескельдинский район", "Уйгурский район", "Илийский район"]
    },
    {
      name_ru: "Атырауская область",
      districts_ru: ["г. Атырау", "Жылыойский район", "Индерский район", "Исатайский район", "Курмангазинский район", "Кзылкогинский район", "Макатский район", "Махамбетский район"]
    },
    {
      name_ru: "Западно-Казахстанская область",
      districts_ru: ["г. Уральск", "Акжаикский район", "Бурлинский район", "Жангалинский район", "Жанибекский район", "Зеленовский район", "Казталовский район", "Каратобинский район", "Бокейординский район", "Сырымский район", "Таскалинский район", "Теректинский район", "Чингирлауский район"]
    },
    {
      name_ru: "Жамбылская область",
      districts_ru: ["г. Тараз", "Байзакский район", "Жамбылский район", "Жуалынский район", "Кордайский район", "район Турара Рыскулова", "Меркенский район", "Мойынкумский район", "Сарысуский район", "Таласский район", "Шуский район"]
    },
    {
      name_ru: "Карагандинская область",
      districts_ru: ["г. Караганда", "г. Балхаш", "г. Жезказган", "г. Каражал", "г. Приозерск", "г. Сарань", "г. Сатпаев", "г. Темиртау", "г. Шахтинск", "Абайский район", "Актогайский район", "Бухар-Жырауский район", "Жанааркинский район", "Каркаралинский район", "Hуринский район", "Осакаровский район", "Улытауский район", "Шетский район"]
    },
    {
      name_ru: "Костанайская область",
      districts_ru: ["г. Костанай", "г. Аркалык", "г. Лисаковск", "г. Рудный", "Алтынсаринский район", "Амангельдинский район", "Аулиекольский район", "Денисовский район", "Джангельдинский район", "Житикаринский район", "Камыстинский район", "Карабалыкский район", "Карасуский район", "Костанайский район", "Мендыкаринский район", "Hаурзумский район", "Сарыкольский район", "Тарановский район", "Узункольский район", "Федоровский район"]
    },
    {
      name_ru: "Кызылординская область",
      districts_ru: ["г. Кызылорда", "г. Байконыр", "Аральский район", "Жалагашский район", "Жанакорганский район", "Казалинский район", "Кармакшинский район", "Сырдарьинский район", "Чиилийский район"]
    },
    {
      name_ru: "Мангистауская область",
      districts_ru: ["г. Актау", "г. Жанаозен", "Бейнеуский район", "Каракиянский район", "Мангистауский район", "Мунайлинский район", "Тупкараганский район"]
    },
    {
      name_ru: "Южно-Казахстанская область",
      districts_ru: ["г. Шымкент", "г. Арысь", "г. Кентау", "г. Туркестан", "Арысский район", "район Байдибека", "Казыгуртский район", "Мактааральский район", "Ордабасынский район", "Отрарский район", "Сайрамский район", "Сарыагашский район", "Сузакский район", "Толебийский район", "Тюлькубасский район", "Шардаринский район"]
    },
    {
      name_ru: "Павлодарская область",
      districts_ru: ["г. Павлодар", "г. Аксу", "г. Экибастуз", "Актогайский район", "Баянаульский район", "Железинский район", "Иртышский район", "Качирский район", "Лебяжинский район", "Майский район", "Павлодарский район", "Успенский район", "Щербактинский район"]
    },
    {
      name_ru: "Северо-Казахстанская область",
      districts_ru: ["г. Петропавловск", "Айыртауский район", "Акжарский район", "Район Магжана Жумабаева", "Есильский район", "Жамбылский район", "Кызылжарский район", "Мамлютский район", "Район Шал акына", "Аккайынский район", "Тайыншинский район", "Тимирязевский район", "Уалихановский район", "Район им.Габита Мусрепова"]
    },
    {
      name_ru: "Восточно-Казахстанская область",
      districts_ru: ["г. Усть-Каменогорск", "г. Аягоз", "г. Зыряновск", "г. Курчатов", "г. Риддер", "г. Семей", "Абайский район", "Аягозский район", "Бескарагайский район", "Бородулихинский район", "Глубоковский район", "Жарминский район", "Зайсанский район", "Зыряновский район", "Кокпектинский район", "Курчумский район", "Катон-Карагайский район", "Тарбагатайский район", "Уланский район", "Урджарский район", "Шемонаихинский район"]
    },
  ];

  const categories = [
    {
      name_ru: "1. Образование",
      sub_category_ru: ["1.1 Детские дошкольные организации", "1.2 Общеобразовательные учреждения", "1.3 Организации технического и профессионального образования", "1.4 Высшие учебные заведения", "1.5 Другие вопросы"]
    },
    {
      name_ru: "2. Здравоохранение",
      sub_category_ru: ["2.1 Качество, доступность и порядок получения медицинских услуг", "2.2 Получение квот на лечение, направлений в специализированные клиники и оздоровительные курорты","2.3 Обеспечение лекарственными средствами и прочими изделиями медицинского назначения", "2.4 Другие вопросы"]
    },
    {
      name_ru: "3. Социальное обеспечение",
      sub_category_ru: ["3.1 Пенсионное обеспечение, пособия, льготы, выплаты и компенсаци", "3.2 Истребование или выплата алиментов", "3.3 Определение инвалидности", "3.4 Материальная и благотворительная помощь", "3.5 Получение услуг (оформление и поиски документов, получение гражданства, прописка и т.д.)", "3.6 Цены на товары народного потребления", "3.7 Другие вопросы"]
    },
    {
      name_ru: "4. Выделение жилья и земельных участков",
      sub_category_ru: ["4.1 Выделение жилья из государственного жилищного фонда", "4.2 Вопросы долевого участия (договора инвестирования)", "4.3 Выделение земельных участков", "4.4 Оформление документов на жилье и земельные участи", "4.5 Другие вопросы"]
    },
    {
      name_ru: "5. Трудоустройство, трудовые споры",
      sub_category_ru: ["5.1 Трудоустройство", "5.2 Увольнение/сокращение", "5.3 Ущемление (притеснение) прав работника, невыплата заработной платы, отпускных, больничных, сверхурочных и других выплат", "5.4 Другие вопросы"]
    },
    {
      name_ru: "6. Вопросы жилищно-коммунального хозяйства и инфраструктуры населенных пунктов",
      sub_category_ru: ["6.1 Ремонт, благоустройство, озеленение общегородского имущества, населенных пунктов", "6.2 Ремонт и благоустройство общего домового имущества (КСК)", "6.3 Электроснабжение, водоснабжение, теплоснабжение, газоснабжение, коммуникации, тарифы на коммунальные услуги", "6.4 Транспорт", "6.5 Строительство и ремонт дорог", "6.6 Экологические и природные бедствия", "6.7 Другие вопросы"]
    },
    {
      name_ru: "7. Бизнес и предпринимательство",
      sub_category_ru: ["7.1 Вопросы малого и среднего бизнеса, отсутствие стартового капитала, оборотных средств, залогового обеспечения", "7.2 Проблемные вопросы при получении государственной поддержки субъектами малого и среднего предпринимательства в рамках государственных и отраслевых программ по поддержке малого и среднего предпринимательства", "7.3 Недостаток знаний, навыков и опыта организации и управления бизнесом", "7.4 Другие вопросы"]
    },
    {
      name_ru: "8. Кредитование, рефинансирование",
      sub_category_ru: ["8.1 Кредитование, рефинансирование (в т.ч. ипотека)", "8.2 Прочие вопросы банков"]
    },
    {
      name_ru: "9. Деятельность партии",
      sub_category_ru: ["9.1 Членство в партии", "9.2 Партийная деятельность (разъяснения, проекты, выборы)", "9.3 Приглашения, благодарности, поздравления партии", "9.4 Другие вопросы"]
    },
    {
      name_ru: "10. Судебная и правоохранительная система",
      sub_category_ru: ["10.1 Несогласие с решениями судов по гражданским делам", "10.2 Несогласие с решениями судов по уголовным делам", "10.3 Несогласие с решениями судов по административным делам", "10.4 Неисполнение решений судей", "10.5 Жалоба на действия либо бездействие судей", "10.6 Жалоба на органы внутренних дел", "10.7 Жалоба на органы прокуратуры", "10.8 Жалоба на антикоррупционную службу и службу экономических расследований", "10.9 Жалоба на действия либо бездействие судебных исполнителей"]
    },
    {
      name_ru: "11. Жалобы",
      sub_category_ru: ["11.1 Жалоба на государственных служащих", "11.2 Жалоба на членов (сотрудников) партии", "11.3 Жалоба на физических, юридических лиц (в т.ч. низкий уровень общественного порядка и т.д.)"]
    },
    {
      name_ru: "12. Предложения и рекомендации",
      sub_category_ru: ["12.1 Предложения по совершенствованию законов РК", "12.2 Предложения по совершенствованию постановлении, распоряжений и иных подзаконных актов", "12.3 Разъяснения по гражданскому, административному, уголовному законодательству", "12.4 Награждение, благодарность, присвоение почетных званий", "12.5 Творческие предложения", "12.6 Вопросы и предложения по экономической политике, планированию и исполнению бюджета", "12.7 Вопросы и предложения использованию государственной собственности и государственным материальным резервам", "12.7 Вопросы и предложения использованию государственной собственности и государственным материальным резервам", "12.9 Вопросы и предложения по развитию языков, туризма, досуговых центров, культуры и спорта", "12.10 Вопросы молодежной политики", "12.11 Вопросы внутренней и внешней политике", "12.12 Вопросы и предложения по техническому регулированию, стандартизации и статистике", "12.13 Другие вопросы"]
    },
    {
      name_ru: "13. Информационно-справочные и прочие звонки на горячую линию",
      sub_category_ru: ["13.1 Информация о ходе рассмотрения обращений", "13.2 Консультация по порядку подачи обращений", "13.3 Консультация по записи на прием", "13.4 Справочная информация по контактам", "13.5 Другие вопросы"]
    },
  ];

  Regions.remove({});
  Categories.remove({});

  regions.forEach((region) => {
    Regions.insert(region);
  });

  categories.forEach((category) => {
    Categories.insert(category);
  });
});
