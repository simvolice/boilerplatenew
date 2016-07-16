import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Chip from 'material-ui/Chip';
import { findDOMNode } from 'react-dom'
import Snackbar from 'material-ui/Snackbar';
import LanguageSelect from '../shared/LanguageSelect.jsx';
import {BlogRecords} from '../../../api/site/blog/BlogRecords.js';

Meteor.subscribe('blog_records');

export default class AddBlogRecord extends Component {

  constructor(props) {
    super(props);

    this.state = {
      record_title: '',
      record_text: '',
      record_tags: [],
      open: false,
      chipData: [
        {key: 0, label: 'Angular'},
        {key: 1, label: 'JQuery'},
        {key: 2, label: 'Polymer'},
        {key: 3, label: 'ReactJS'},
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
    this.onBlurEvt = this.onBlurEvt.bind(this);
    this.onEnterEvt = this.onEnterEvt.bind(this);
    this.onClickEvt = this.onClickEvt.bind(this);
    this.onEnterClick = this.onEnterClick.bind(this);
    this.handleRequestDelete = this.handleRequestDelete.bind(this);
    this.handleNotificationClose = this.handleNotificationClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  handleNotificationClose(event) { this.setState({open: false}); }

  addChip(event){ this.setState({ valforchip: event.target.value }); }
  
  onEnterEvt(){ console.log(this.refs.recordTags.props.chips); }
  
  handleLanguageChange(language) { this.setState({language: language}); }

  handleChange(event){ this.setState({[event.target.getAttribute('data-name')]: event.target.value }); }

  onClickEvt(){ console.log('Add new blog record'); }

  onBlurEvt(){ console.log("onBlurEvt"); }


  onEnterClick(event){
    //TODO потом надо доделать проверку на пустой стринг

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


  add_record(){
    new_record = {
      title: this.state.title,
      text: this.state.text,
      tags: [],
      language: this.state.language,
      createdAt: new Date()
    }

    // Save tags
    this.state.chipData.map(tag => new_record.tags.push(tag['label']))

    // debug
    console.log(new_record);
    console.log(this.refs);

    if(BlogRecords.insert(new_record)){
      console.log(this.state);
      this.state.record_title = '';
      this.setState({open: true});
      this.setState({title: ''});
      this.setState({text: ''});
      this.setState({chipData: []});
      this.setState({language: 1})
    }
  }

  render() {
    return (
        <div className="row">
          {/* Notification */}
          <Snackbar
            open={this.state.open}
            message="Запись в блог добавлена"
            autoHideDuration={4000}
            onRequestClose={this.handleNotificationClose}
          />

          <div className="col s12 m12">
            <div className="card">
              <div className="card-content white-text">

                {/* Record title */}
                <div className="row">
                  <div className="col s12">

                    <TextField hintText="Заголовок" data-name="title" onChange={this.handleChange} />

                  </div>
                </div>

                {/* Record language */}
                <div className="row">
                  <div className="col s12">
                    <LanguageSelect handler={this.handleLanguageChange}/>
                  </div>
                </div>

                {/* Record text */}
                <div className="row">
                  <div className="col s12">

                    <TextField
                        hintText="Текст"
                        multiLine={true}
                        rows={2}
                        rowsMax={4}
                        data-name="text"
                        onChange={this.handleChange}
                    />

                  </div>
                </div>

                {/* Record photo */}
                <div className="row">
                  <div className="col s12">

                    <div className="file-field input-field">
                      <div className="btn">
                        <span>Выбери фотографию</span>
                        <input type="file" ref="recordImage"/>
                      </div>

                      <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                      </div>
                    </div>

                  </div>
                </div>

                {/* Record tags */}
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

              </div>

              <div className="card-action">
                <a onClick={this.add_record.bind(this)}>Создать запись</a>
              </div>

            </div>
          </div>
        </div>
    );
  }
}
