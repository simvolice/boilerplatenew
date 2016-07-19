import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import {Meteor} from 'meteor/meteor';

import {Card, CardHeader, CardTitle, CardText, CardActions} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import AutoComplete from 'material-ui/AutoComplete';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

import ActionDelete from 'material-ui/svg-icons/action/delete';

import {Regions} from '../../../api/site/addComplaint/Regions.js';
Meteor.subscribe('regions');

const styles = {
  radioStyle: {
    float: 'left',
    display: 'inline-block'
  },
  checkbox: {
    marginBottom: 15
  },
  deleteButtonStyle: {
    marginTop: 20,
  }
};

export default class Registration extends Component {

  constructor(props) {
    super(props);

    this.state = {
      districtNames: [],
      regionValue: '',
      regionText: '',
      districtValue: '',
      districtText: ''
    }
  }

  getRegionNames() {
    return this.props.regions.map((region) => {
      return {
        text: region.name_ru,
        value: region._id
      }
    });
  }

  handleRegionUpdate(value) {
    const currentRegion = this.props.regions.filter((region) => {
      return region._id === value.value;
    });

    const districtNames = currentRegion[0].districts_ru.map((district, index) => {
      return {
        text: district,
        value: index
      };
    });

    this.setState({
      districtNames,
      regionValue: value.value,
      regionText: value.text
    });
  }

  handleRegionInput(regionText) {
    this.setState({regionText});
  }

  handleDistrictUpdate(value) {
    this.setState({
      districtValue: value.value,
      districtText: value.text
    });
  }

  handleDistrictInput(districtText) {
    this.setState({districtText});
  }

  clearAutoComplete(valueNames) {
    valueNames.forEach((item) => {
      this.setState({[item]: ''});
    });
  }

  render() {
    return (
      <div className="container">
        <Card className="row">
          <CardTitle
            title="Регистрация"
          />
        </Card>
        <Card className="row">
          <CardText className="row">
            <TextField
              hintText="email"
              className="col s5 offset-s1"
            />
            <TextField
              hintText="номер партийного билета"
              className="col s4 offset-s1"
            />
          </CardText>
        </Card>
        <Card className="row">
          <CardTitle
            title="Личные данные"
            subtitle="введите ФИО"
          />
          <Divider />
          <CardText className="row">
            <div className="col s4">
              <TextField
                hintText="имя"
                fullWidth={true}
              />
            </div>
            <div className="col s4">
              <TextField
                hintText="фамилия"
                fullWidth={true}
              />
            </div>
            <div className="col s4">
              <TextField
                hintText="отчество"
                fullWidth={true}
              />
            </div>
            <div className="col s4">
              <TextField
                hintText="ИИН"
                fullWidth={true}
              />
            </div>
          </CardText>
        </Card>
        <Card className="row">
          <CardTitle
            title="Контактные данные"
            subtitle="введите номера телефонов"
          />
          <Divider />
          <CardText className="row">
            <TextField
              hintText="гор. телефон"
              className="col s5 offset-s1"
            />
            <TextField
              hintText="моб. телефон"
              className="col s5 offset-s1"
            />
          </CardText>
        </Card>
        <Card className="row">
          <CardTitle
            title="Адрес проживания"
            subtitle="введите свой текущий адрес проживания"
          />
          <Divider />
          <CardText className="row">
            <div className="col s7 offset-s1">
              <AutoComplete
               floatingLabelText="Выберите регион"
               filter={AutoComplete.caseInsensitiveFilter}
               openOnFocus={true}
               dataSource={this.getRegionNames()}
               onNewRequest={this.handleRegionUpdate.bind(this)}
               onUpdateInput={this.handleRegionInput.bind(this)}
               fullWidth={true}
               value={this.state.regionValue}
               searchText={this.state.regionText}
              />
            </div>
            <div className="col s1">
              <RaisedButton
                icon={<ActionDelete />}
                style={styles.deleteButtonStyle}
                onClick={this.clearAutoComplete.bind(this, ['regionText', 'regionValue', 'districtText', 'districtValue'])}
                fullWidth={true}
              />
            </div>
            <div className="col s7 offset-s1">
              <AutoComplete
                floatingLabelText="Выберите район"
                filter={AutoComplete.caseInsensitiveFilter}
                openOnFocus={true}
                dataSource={this.state.districtNames}
                onNewRequest={this.handleDistrictUpdate.bind(this)}
                onUpdateInput={this.handleDistrictInput.bind(this)}
                fullWidth={true}
                value={this.state.districtValue}
                searchText={this.state.districtText}
                disabled={this.state.districtNames.length === 0}
              />
            </div>
            <div className="col s1">
              <RaisedButton
                icon={<ActionDelete />}
                style={styles.deleteButtonStyle}
                onClick={this.clearAutoComplete.bind(this, ['districtText', 'districtValue'])}
                fullWidth={true}
              />
            </div>
            <div className="col s9 offset-s1">
              <TextField
                hintText="адрес"
                fullWidth={true}
              />
            </div>
          </CardText>
        </Card>
        <Card className="row">
          <CardTitle
            title="Ваш пароль"
            subtitle="введите свой пароль 2 раза"
          />
          <Divider />
          <CardText className="row">
            <TextField
              hintText="Ваш пароль"
              className="col s3 offset-s1"
              type="password"
            />
            <TextField
              hintText="Подтверждение пароля"
              className="col s3 offset-s1"
              type="password"
            />
          </CardText>
        </Card>
        <Card className="row">
          <CardActions>
            <FlatButton label="Зарегистрироваться" />
          </CardActions>
        </Card>
      </div>
    );
  }
}

Registration.propTypes = {
  regions: PropTypes.array.isRequired
};

export default createContainer(() => {
  return {
    regions: Regions.find({}).fetch(),
  }
}, Registration);
