import React, {Component} from 'react';


import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Chip from 'material-ui/Chip';

import Select from 'react-select';
import 'react-select/dist/react-select.css';
export default class AddNews extends Component {




  constructor(props) {
    super(props);

    this.state = {chipData: [
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

    this.addChip = this.addChip.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onEnterClick = this.onEnterClick.bind(this);
    this.handleRequestDelete = this.handleRequestDelete.bind(this);

  }


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

  addChip(event){


    this.setState({
      valforchip: event.target.value
    });




  }




  handleChange(event, index, value) {
    return this.setState({value});
  }

   handleRequestDelete(key) {


    this.chipData = this.state.chipData;
     
    const chipToDelete = this.chipData.map(chipe).indexOf(key);

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


  render() {



    return (
      <div className="row">


          <div className="col s12">
            <div className="card white darken-1">
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

                    <Select
                        name="form-field-name"
                        value="one"
                        options={this.state.options}

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


