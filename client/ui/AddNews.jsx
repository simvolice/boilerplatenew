import React, {Component} from 'react';

import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MdInputChips from "react-mdchips";

import Select from 'react-select';

// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css';

import {intlShape, injectIntl, defineMessages} from 'react-intl';

const messages = defineMessages({
  enUSDescription: {
    id: 'menu.item_en_us_description',
    defaultMessage: 'The default locale of this example app.',
  },
  ruRUDescription: {
    id: 'menu.item_en_upper_description',
    defaultMessage: 'The fake, all uppercase "locale" for this example app.',
  },
  kkKKDescription: {
    id: 'menu.item_en_upper_description',
    defaultMessage: 'The fake, all uppercase "locale" for this example app.',
  }

  
  

});

class AddNews extends Component {



   static propTypes = {
    intl: intlShape.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {

    const {formatMessage} = this.props.intl;


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


                <div className="row">
                  <div className="col s12">

                    <Select
                        name="form-field-name"
                        value="one"
                        options={options}
                        onChange={logChange}
                        placeholder="Регион"
                    />


                  </div>
                </div>



              </div>
              <div className="card-action">
                <a href="#">Сохранить новость</a>

              </div>
            </div>
          </div>



      </div>
    );
  }
}


export default injectIntl(AddNews);