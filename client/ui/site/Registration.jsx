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

import {Regions} from '../../../api/site/addComplaint/Regions.js';
Meteor.subscribe('regions');

const styles = {
  radioStyle: {
    float: 'left',
    display: 'inline-block'
  },
  checkbox: {
    marginBottom: 15
  }
};

export default class Registration extends Component {

  constructor(props) {
    super(props);

    this.state = {
      districtNames: []
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

    this.setState({districtNames});
  }

  render() {
    return (
      <div className="container">
        <Card className="row">
          <CardTitle
            title="Регистрация"
            subtitle="воспользуйтесь возможностью написать какому-нибудь депутату"
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
            <TextField
              hintText="имя"
              className="col s3 offset-s1"
            />
            <TextField
              hintText="фамилия"
              className="col s3 offset-s1"
            />
            <TextField
              hintText="отчество"
              className="col s2 offset-s1"
            />
          </CardText>
        </Card>
        <Card className="row">
          <CardText className="row">
            <TextField
              hintText="ИИН"
              className="col s3 offset-s1"
            />
            <TextField
              hintText="пол"
              className="col s3 offset-s1"
              disabled={true}
            />
            <TextField
              hintText="дата рождения"
              className="col s2 offset-s1"
              disabled={true}
            />
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
            <div className="col s4 offset-s1">
              <AutoComplete
               floatingLabelText="Выберите регион"
               filter={AutoComplete.caseInsensitiveFilter}
               openOnFocus={true}
               dataSource={this.getRegionNames()}
               onNewRequest={this.handleRegionUpdate.bind(this)}
               fullWidth={true}
              />
            </div>
            <div className="col s4 offset-s1">
              <AutoComplete
                floatingLabelText="Выберите район"
                filter={AutoComplete.caseInsensitiveFilter}
                openOnFocus={true}
                dataSource={this.state.districtNames}
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
            title="Занятость"
            subtitle="укажите свою занятость"
          />
          <Divider />
          <CardText className="row">
            <RadioButtonGroup className="col s4" name="employment" style={{display: 'flex'}}>
              <RadioButton
                value="light"
                label="Я трудоустроен(-а)"
                className="col s4"
              />
              <RadioButton
                value="not_light"
                label="Я безработный(-ая)"
                className="col s4"
              />
              <RadioButton
                value="ludicrous"
                label="Я самозанятый(-ая)"
                className="col s4"
              />
            </RadioButtonGroup>
          </CardText>
        </Card>
        <Card className="row">
          <CardTitle
            title="Категория граждан"
            subtitle="выберите категории, к которым вы относитесь"
          />
          <Divider />
          <CardText className="row">
              <div className="col s3">
                <Checkbox
                  label="Молодежь"
                  style={styles.checkbox}
                  fullWidth={true}
                />
              </div>
              <div className="col s3">
                <Checkbox
                  label="Ветеран тыла"
                  style={styles.checkbox}
                  fullWidth={true}
                />
              </div>
              <div className="col s3">
                <Checkbox
                  label="Инвалид"
                  style={styles.checkbox}
                  fullWidth={true}
                />
              </div>
              <div className="col s3">
                <Checkbox
                  label="Пенсионер"
                  style={styles.checkbox}
                  fullWidth={true}
                />
              </div>
              <div className="col s3">
                <Checkbox
                  label="Молодая семья"
                  style={styles.checkbox}
                  fullWidth={true}
                />
              </div>
              <div className="col s3">
                <Checkbox
                  label="Ветеран войны"
                  style={styles.checkbox}
                  fullWidth={true}
                />
              </div>
              <div className="col s3">
                <Checkbox
                  label="Сирота"
                  style={styles.checkbox}
                  fullWidth={true}
                />
              </div>
              <div className="col s3">
                <Checkbox
                  label="Студент"
                  style={styles.checkbox}
                  fullWidth={true}
                />
              </div>
              <div className="col s3">
                <Checkbox
                  label="Многодетная семья"
                  style={styles.checkbox}
                  fullWidth={true}
                />
              </div>
              <div className="col s3">
                <Checkbox
                  label="Ветеран труда"
                  style={styles.checkbox}
                  fullWidth={true}
                />
              </div>
              <div className="col s3">
                <Checkbox
                  label="Военный"
                  style={styles.checkbox}
                  fullWidth={true}
                />
              </div>
              <div className="col s3">
                <Checkbox
                  label="Прочие"
                  style={styles.checkbox}
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
