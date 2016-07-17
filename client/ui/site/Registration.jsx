import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import {Meteor} from 'meteor/meteor';

import {Card, CardHeader, CardTitle, CardText, CardActions} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import AutoComplete from 'material-ui/AutoComplete';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import {Regions} from '../../../api/site/addComplaint/Regions.js';
Meteor.subscribe('regions');

const styles = {
  radioStyle: {
    float: 'left',
    display: 'inline-block'
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
        <Card className="row">
          <CardHeader
            title="Регистрация"
            subtitle="воспользуйтесь возможностью написать какому-нибудь депутату"
            avatar="http://nurotan.kz/sites/all/themes/nurportal/images/logo.png"
            className="row"
          />
          <Divider />
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
          <Divider />
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
          <Divider />
          <CardText className="row">
            <AutoComplete
             floatingLabelText="Выберите регион"
             filter={AutoComplete.caseInsensitiveFilter}
             openOnFocus={true}
             dataSource={this.getRegionNames()}
             onNewRequest={this.handleRegionUpdate.bind(this)}
             className="col s5 offset-s2"
            />
            <AutoComplete
              floatingLabelText="Выберите район"
              filter={AutoComplete.caseInsensitiveFilter}
              openOnFocus={true}
              dataSource={this.state.districtNames}
              className="col s4 offset-s3"
            />
            <TextField
              hintText="адрес"
              className="col s10 offset-s1"
            />
          </CardText>
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
          <Divider />
          <CardActions>
            <FlatButton label="Зарегистрироваться" />
          </CardActions>
        </Card>
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
