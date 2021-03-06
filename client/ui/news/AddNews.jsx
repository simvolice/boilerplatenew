import {createContainer} from 'meteor/react-meteor-data';

import {Meteor} from 'meteor/meteor';


import React, {Component, PropTypes} from 'react';
import moment from 'moment/min/moment-with-locales.min';
moment.locale('ru');
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Chip from 'material-ui/Chip';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import TinyMCE from 'react-tinymce';
import LanguageSelect from '../shared/LanguageSelect.jsx';
import {NewsRecords} from '../../../api/site/news/NewsRecords.js';
import Snackbar from 'material-ui/Snackbar';
import {Regions} from '../../../api/site/addComplaint/Regions.js';
import {Tabs, Tab} from 'material-ui/Tabs';

import slug from 'slug';

import lodash from 'lodash';

Meteor.subscribe('regions');

export default class AddNews extends Component {


  componentDidMount(){




    var widget = uploadcare.Widget('[role=uploadcare-uploader]');

    widget.onUploadComplete(function(fileInfo) {

      this.setState({urlImage: fileInfo.originalUrl});

    }.bind(this));


  }




  constructor(props) {
    super(props);






    this.state = {
      regionValue: 'Выберите регион',
      urlImage: '',
      open: false,
      chipData: [

      ],

      language: 1,
      valforchip: '',

      options : []

    };

    this.styles = {
      chip: {
        margin: 4
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap'
      }
    };

    this.addChip = this.addChip.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onEnterClick = this.onEnterClick.bind(this);
    this.handleRequestDelete = this.handleRequestDelete.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
    this.add_news_record = this.add_news_record.bind(this);
    this.handleNotificationClose = this.handleNotificationClose.bind(this);
    this.handleDynamicChange = this.handleDynamicChange.bind(this);
    this.handleEditorChangeRu = this.handleEditorChangeRu.bind(this);
    this.handleEditorChangeKz = this.handleEditorChangeKz.bind(this);
    this.handleEditorChangeEn = this.handleEditorChangeEn.bind(this);
    this.regionChange = this.regionChange.bind(this);
  }



  getRegionNames() {
    return this.props.regions.map((region) => {
      return {
        label: region.name_ru,
        value: region._id
      }
    });
  }




  handleEditorChangeRu(e) {


    this.setState({text: e.target.getContent() });




  }



  handleEditorChangeKz(e) {


    this.setState({text_kz: e.target.getContent() });




  }


  handleEditorChangeEn(e) {


    this.setState({text_en: e.target.getContent() });




  }

  handleNotificationClose(event) { this.setState({open: false}); }

  regionChange(val){



    this.setState({regionValue: val});

  }


  onEnterClick(event){

    if (!/\s/g.test(event.target.value)){
      if (event.keyCode === 13) {
        this.state.chipData.push({
          key: this.state.chipData.length,
          label: event.target.value
        });

        this.setState({
          valforchip: ''
        });
      }
    }
  }

  addChip(event){
    this.setState({
      valforchip: event.target.value
    });
  }

  handleChange(event, index, value) { this.setState({value}); }

  handleDynamicChange(event){ this.setState({[event.target.getAttribute('data-name')]: event.target.value }); }

  handleRequestDelete(key) {
    this.chipData = this.state.chipData;

    const chipToDelete = this.chipData.map(chipe).indexOf(key);
    function chipe(chip) {
      return chip.key;
    }

    function chipe(chip) {
      return chip.key;
    }

    this.chipData.splice(chipToDelete, 1);
    this.setState({chipData: this.chipData});
  }

  renderChip(data) {
    return (
        <Chip
            key={data.key}
            onRequestDelete={() => this.handleRequestDelete(data.key)}
            style={this.styles.chip}
        >
          {data.label}
        </Chip>
    );
  }

  // will called from child LanguageSelect component with language_id
  handleLanguageChange(language) { this.setState({language: language}); }




  add_news_record(){
    new_record = {
      title: this.state.title,
      title_kz: this.state.titlekz,
      title_en: this.state.titleen,
      text: this.state.text,
      text_kz: this.state.text_kz,
      text_en: this.state.text_en,
      truncateText: lodash.truncate($(this.state.text).text()),
      truncateText_kz: lodash.truncate($(this.state.text_kz).text()),
      truncateText_en: lodash.truncate($(this.state.text_en).text()),
      tags: [],
      urlImage: this.state.urlImage,
      language: this.state.language,
      createdAt: moment().format('LLLL'),
      region: this.state.regionValue,
      slug: slug(this.state.title, {lower: true})
    };

    // Save tags
    this.state.chipData.map(tag => new_record.tags.push(tag['label']))

    // debug
    console.log(new_record);

    if(NewsRecords.insert(new_record)){
      this.setState({open: true});
    }
  }

  render() {
    return (
      <div className="row">
          {/* Notification */}
          <Snackbar
            open={this.state.open}
            message="Новость добавлена"
            autoHideDuration={4000}
            onRequestClose={this.handleNotificationClose}
          />

          <div className="col s12">

            <Card>

              <CardTitle title="Добавь новость"/>
              <CardText>


                {/* News title */}
                <div className="row">
                  <div className="col s12">
                    <TextField hintText="Заголовок" data-name="title" onChange={this.handleDynamicChange} />
                  </div>
                </div>

                <div className="row">
                  <div className="col s12">
                    <TextField hintText="Тақырып" data-name="titlekz" onChange={this.handleDynamicChange} />
                  </div>
                </div>



                <div className="row">
                  <div className="col s12">
                    <TextField hintText="Title" data-name="titleen" onChange={this.handleDynamicChange} />
                  </div>
                </div>




                {/* News Langage */}
                <div className="row">
                  <div className="col s12">
                    <LanguageSelect handler={this.handleLanguageChange}/>
                  </div>
                </div>


                {/* News text */}
                <div className="row">
                  <div className="col s12">



                    <Tabs>
                      <Tab label="Текст на русском" >
                        <div>
                          <TinyMCE
                              content="<p>Начни писать текст новости здесь...</p>"
                              config={{
                                plugins: 'code',
                                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                              }}
                              onChange={this.handleEditorChangeRu}
                          />

                        </div>
                      </Tab>
                      <Tab label="Текст на казахском" >
                        <TinyMCE
                            content="<p>Начни писать текст новости здесь...</p>"
                            config={{
                              plugins: 'code',
                              toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                            }}
                            onChange={this.handleEditorChangeKz}
                        />
                      </Tab>
                      <Tab
                          label="Текст на английском">
                        <TinyMCE
                            content="<p>Начни писать текст новости здесь...</p>"
                            config={{
                              plugins: 'code',
                              toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                            }}
                            onChange={this.handleEditorChangeEn}
                        />
                      </Tab>
                    </Tabs>






                  </div>
                </div>

                {/* News photo */}
                <div className="row">
                  <div className="col s12">
                    <input type="hidden" name="picture" role="uploadcare-uploader" />
                  </div>
                </div>

                {/* News tags. I think we should out to component like LanguageSelect */}
                <div className="row">
                  <div className="col s12">

                    <div style={this.styles.wrapper}>
                      {this.state.chipData.map(this.renderChip, this)}
                    </div>

                    <div className="divider"></div>

                    <TextField hintText="Добавь теги" id="text-field-controlled" value={this.state.valforchip}
                               onChange={this.addChip} onKeyDown={this.onEnterClick}
                    />

                  </div>
                </div>



                <div className="row">
                  <div className="col s12">
                    <Select multi={true} placeholder="Выбери регион" value={this.state.regionValue} name="form-field-name" options={this.getRegionNames()} onChange={this.regionChange}/>
                  </div>
                </div>



              </CardText>
              <CardActions>
                <FlatButton onClick={this.add_news_record} label="Сохранить" />

              </CardActions>
            </Card>


          </div>



      </div>
    );
  }
}


AddNews.propTypes = {
  regions: PropTypes.array.isRequired
};

export default createContainer(() => {
  return {
    regions: Regions.find({}).fetch()
  }
}, AddNews);