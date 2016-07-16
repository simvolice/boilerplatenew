import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Chip from 'material-ui/Chip';
import MdInputChips from "react-mdchips";

export const Tasks = new Mongo.Collection('blog_records');

export default class AddBlogRecord extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chipData: [
        {key: 0, label: 'Angular'},
        {key: 1, label: 'JQuery'},
        {key: 2, label: 'Polymer'},
        {key: 3, label: 'ReactJS'},
      ],

      value: 1,
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

    this.onBlurEvt = this.onBlurEvt.bind(this);
    this.onEnterEvt = this.onEnterEvt.bind(this);
  }



  onBlurEvt(){
    console.log("onBlurEvt");
  }
  onEnterEvt(){
    console.log("onEnterEvt");
  }

  render() {
    return (
        <div className="row">


          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">


                <div className="row">
                  <div className="col s12">

                    <TextField hintText="Заголовок"/>


                  </div>
                </div>

                <div className="row">
                  <div className="col s12">

                    <SelectField
                        value={this.state.value}
                        onChange={this.handleChange}
                        autoWidth={true}
                        floatingLabelText="Язык"
                    >
                      <MenuItem value={1} primaryText="Русский язык" />
                      <MenuItem value={2} primaryText="Казахский язык" />
                      <MenuItem value={3} primaryText="Английский язык" />

                    </SelectField>


                  </div>
                </div>


                <div className="row">
                  <div className="col s12">

                    <TextField
                        hintText="Текст"
                        multiLine={true}
                        rows={2}
                        rowsMax={4}
                    />


                  </div>
                </div>


                <div className="row">
                  <div className="col s12">

                    <div className="file-field input-field">
                      <div className="btn">
                        <span>Выбери фотографию</span>
                        <input type="file" />
                      </div>
                      <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                      </div>
                    </div>



                  </div>
                </div>


                <div className="row">
                  <div className="col s12">

                    <MdInputChips
                        placeholder="Теги"
                        containerClassName="outer-tags-div"
                        chips={["xx", "cv"]}
                        inputClassName="tags-input"
                        max="10"
                        onBlur={this.onBlurEvt.bind(this)}
                        onEnter={this.onEnterEvt.bind(this)}
                    />



                  </div>
                </div>


                


              </div>
              <div className="card-action">
                <a href="#">Создать запись</a>

              </div>
            </div>
          </div>



        </div>
    );
  }
}
