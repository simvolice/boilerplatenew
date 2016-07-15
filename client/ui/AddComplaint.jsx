import React, {Component} from 'react';

import {Card, CardHeader, CardActions, CardTitle, CardText} from 'material-ui/Card';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
  checkbox: {
    marginBottom: 16,
  },
  select: {
    marginBottom: 16
  },
  card: {
    height: 300
  }
};

export default class AddComplaint extends Component {
  constructor(props) {
      super(props);
      this.state = {
        rulesExpanded: true,
        appealType: null,
        questionCategory: null,
        region: null,
        district: null
      };
  }

  getAppealTypes() {
    return [
      <MenuItem key={1} value={1} primaryText="Образование" />,
      <MenuItem key={2} value={2} primaryText="Агрокультура" />,
      <MenuItem key={3} value={3} primaryText="Молодежь" />,
    ];
  }

  getQuestionCategory() {
    return [
      <MenuItem key={1} value={1} primaryText="Детские дошкольные организации" />,
      <MenuItem key={2} value={2} primaryText="Взрослые послешкольные организации" />,
      <MenuItem key={3} value={3} primaryText="Школьные организации" />,
    ];
  }

  getRegions() {
    return [
      <MenuItem key={1} value={1} primaryText="город Астана" />,
      <MenuItem key={2} value={2} primaryText="город Алматы" />,
      <MenuItem key={3} value={3} primaryText="Акмолинский областной филиал" />,
      <MenuItem key={4} value={4} primaryText="Актюбинский областной филиал" />,
    ];
  }

  getDistricts() {
    return [
      <MenuItem key={1} value={1} primaryText="Аршалинский район" />,
      <MenuItem key={2} value={2} primaryText="Аккольский район" />,
      <MenuItem key={3} value={3} primaryText="Есильский район" />,
      <MenuItem key={4} value={4} primaryText="Темирский район" />,
    ];
  }

  handleATChange(event, index, appealType) {
    this.setState({appealType});
  }

  handleQCChange(event, index, questionCategory) {
    this.setState({questionCategory});
  }

  handleRChange(event, index, region) {
    this.setState({region});
  }

  handleDChange(event, index, district) {
    this.setState({district});
  }

  render() {
    return (
      <div className="container">
        <Card className="row top-buffer">
          <CardTitle
            title="Обещственная приемная"
            subtitle="Электронная общественная приемная парии Нуротан"
          />
        </Card>
        <Card className="row">
          <CardHeader title="Тип обращения и категория вопроса" />
          <CardText className="row">
            <div className="col s6">
              <SelectField
                value={this.state.appealType}
                onChange={this.handleATChange.bind(this)}
                fullWidth={true}
                floatingLabelText="Выберите тип обращения"
                style={styles.select}
              >
                {this.getAppealTypes()}
              </SelectField>
            </div>
            <div className="col s6">
              <SelectField
                value={this.state.questionCategory}
                onChange={this.handleQCChange.bind(this)}
                floatingLabelText="Категория вопроса"
                fullWidth={true}
              >
                {this.getQuestionCategory()}
              </SelectField>
            </div>
          </CardText>
        </Card>
        <div className="row">
          <Card className="col s6" style={styles.card}>
            <CardHeader title="Обращение" />
            <CardText>
                <RadioButtonGroup name="appealTime" defaultSelected="first-time" className="col s6">
                  <RadioButton
                    value="first-time"
                    label="Первичное обращение"
                    style={styles.radioButton}
                    className="col s6"
                  />
                  <RadioButton
                    value="second-time"
                    label="Вторичное обращение"
                    className="col s6"
                    style={styles.radioButton}
                  />
                </RadioButtonGroup>
                <Checkbox
                  label="Несогласие с решением суда"
                  style={styles.checkbox}
                  className="col s6"
                />
            </CardText>
          </Card>
          <Card className="col s6" style={styles.card}>
            <CardHeader title="Категория" />
            <CardText>
                <RadioButtonGroup name="appealTime" defaultSelected="first-time" className="col s6">
                  <RadioButton
                    value="civil-case"
                    label="По гражданским делам"
                    style={styles.radioButton}
                    className="col s6"
                  />
                  <RadioButton
                    value="administrative-case"
                    label="По административным делам"
                    className="col s6"
                    style={styles.radioButton}
                  />
                  <RadioButton
                    value="criminal-case"
                    label="По уголовным делам"
                    className="col s6"
                    style={styles.radioButton}
                  />
                </RadioButtonGroup>
            </CardText>
          </Card>
        </div>
        <div className="row">
          <Card className="col s6" style={styles.card}>
            <CardHeader title="Куда подать обращение" />
            <CardText>
              <RadioButtonGroup name="appealTime" className="col s12">
                <RadioButton
                  value="central-staff"
                  label="Центральный аппарат"
                  style={styles.radioButton}
                  fullWidth={true}
                />
                <RadioButton
                  value="own-staff"
                  label="Свой регион"
                  style={styles.radioButton}
                  fullWidth={true}
                />
              </RadioButtonGroup>
            </CardText>
          </Card>
          <Card className="col s6" style={styles.card}>
            <CardHeader title="Другой регион" />
            <CardText>
              <div className="col s12">
                <SelectField
                  value={this.state.region}
                  onChange={this.handleRChange.bind(this)}
                  fullWidth={true}
                  floatingLabelText="Выберите область"
                >
                  {this.getRegions()}
                </SelectField>
              </div>
              <div className="col s12">
                <SelectField
                  value={this.state.district}
                  onChange={this.handleDChange.bind(this)}
                  fullWidth={true}
                  floatingLabelText="Выберите район"
                >
                  {this.getDistricts()}
                </SelectField>
              </div>
            </CardText>
          </Card>
        </div>
        <Card className="row">
          <CardHeader title="Суть обращения" />
          <CardText>
            <TextField
              floatingLabelText="Подробный текст вашего обращения"
              multiLine={true}
              rows={5}
              rowsMax={10}
              fullWidth={true}
            />
            <div className="file-field input-field col s6">
              <div className="btn">
                <span>Загрузить файл</span>
                <input type="file" />
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
              </div>
            </div>
          </CardText>
        </Card>
        <Card className="row">
          <CardActions>
            <FlatButton label="Нажимая кнопку" disabled={true} />
            <RaisedButton label="подать обращение" primary={true} />,
            <FlatButton label="вы соглашаетесь с" disabled={true} />
            <FlatButton label="правилами подачи обращения" />.
          </CardActions>
        </Card>
      </div>
    );
  }
}
