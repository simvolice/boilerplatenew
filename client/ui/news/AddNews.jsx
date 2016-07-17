import React, {Component} from 'react';


import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Chip from 'material-ui/Chip';

import Select from 'react-select';
import 'react-select/dist/react-select.css';
import TinyMCE from 'react-tinymce';
import LanguageSelect from '../shared/LanguageSelect.jsx';
import {NewsRecords} from '../../../api/site/news/NewsRecords.js';
import Snackbar from 'material-ui/Snackbar';

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

      options : [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' }
      ]

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
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.regionChange = this.regionChange.bind(this);
  }

  handleEditorChange(e) { this.setState({text: e.target.getContent() });}

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
      text: this.state.text,
      tags: [],
      urlImage: this.state.urlImage,
      language: this.state.language,
      createdAt: new Date(),
      region: this.state.regionValue
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
            <div className="card white darken-1">
              <div className="card-content white-text">

                {/* News title */}
                <div className="row">
                  <div className="col s12">
                    <TextField hintText="Заголовок" data-name="title" onChange={this.handleDynamicChange} />
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

                    <TinyMCE
                        content="<p>Начните писать текст здесь...</p>"
                        config={{
                          plugins: 'code',
                          toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                        }}
                        onChange={this.handleEditorChange}
                    />
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
                    <Select value={this.state.regionValue} name="form-field-name" options={this.state.options} onChange={this.regionChange}/>
                  </div>
                </div>


              </div>

              <div className="card-action">
                <a onClick={this.add_news_record}>Сохранить новость</a>
              </div>

            </div>
          </div>



      </div>
    );
  }
}
