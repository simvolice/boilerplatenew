import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import {Meteor} from 'meteor/meteor';

import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import AutoComplete from 'material-ui/AutoComplete';

import {Regions} from '../../../api/site/addComplaint/Regions.js';
Meteor.subscribe('regions');

import {Categories} from '../../../api/site/addComplaint/Categories.js';
Meteor.subscribe('categories');

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
    height: 350
  },
  ruleActionLabelStyle: {
    fontSize: 15,
  }
};

export default class AddComplaint extends Component {
  constructor(props) {
      super(props);

      this.state = {
        rulesOpen: false,
        categoryNames: [],
      };

      let categoryNames = [];

      this.props.categories.forEach((category) => {
        categoryNames.push({
          text: category.name_ru,
          value: category._id
        });
      });

      this.setState({categoryNames});
  }

  renderCategories() {
    return this.props.categories.map((category) => (
      <MenuItem key={category._id} value={category._id} primaryText={category.name_ru} />,
    ));
  }

  renderRegions() {
    return this.props.regions.map((region) => (
      <MenuItem key={region._id} value={region._id} primaryText={region.name_ru} />,
    ));
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

  openRules() {
    this.setState({rulesOpen: true});
  }

  closeRules() {
    this.setState({rulesOpen: false});
  }

  render() {
    const modalActions = [
      <FlatButton
        label="Закрыть"
        primary={true}
        onTouchTap={this.closeRules.bind(this)}
      />
    ];

    return (
      <div className="row">
        <Card className="row top-buffer">
          <CardTitle
            title="Обещственная приемная"
            subtitle="Электронная общественная приемная партии Нуротан"
          />
        </Card>
        <Card className="row">
          <CardHeader title="Тип обращения и категория вопроса" />
          <CardText className="row">
            <div className="col s6">
              <AutoComplete
                hintText="Type anything"
                dataSource={this.state.categoryNames}
                fullWidth={true}
                openOnFocus={true}
              />
            </div>
            <div className="col s6">
              <AutoComplete
                hintText="Type anything"
                dataSource={this.state.categoryNames}
                fullWidth={true}
                openOnFocus={true}
              />
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
                />
                <RadioButton
                  value="own-staff"
                  label="Свой регион"
                  style={styles.radioButton}
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
                  {this.renderRegions()}
                </SelectField>
              </div>
              <div className="col s12">
                <SelectField
                  value={this.state.district}
                  onChange={this.handleDChange.bind(this)}
                  fullWidth={true}
                  floatingLabelText="Выберите район"
                >
                  {this.renderRegions()}
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
          <CardText>
            <p>
              Нажимая кнопку "подать обращение", вы соглашаетесь с
              <a href="#" onClick={this.openRules.bind(this)} > правилами
              подачи обращения</a>.
            </p>
            <br/><RaisedButton labelStyle={styles.ruleActionLabelStyle} label="подать обращение" primary={true} />
            <Dialog
              title="Правила подачи обращения"
              subtitle="Уважаемый посетитель!"
              modal={true}
              open={this.state.rulesOpen}
              autoScrollBodyContent={true}
              actions={modalActions}
            >
              <br/>Перед подачей обращения, ознакомьтесь с правилами подачи обращений.<br/><br/>
              <b>Не рассматриваются вопросы:</b>
              <ul>
                <li>Анонимные, за исключением отдельных случаев</li>
                <li>Содержащие нецензурные выражения</li>
                <li>Содержащие нечитаемый текст и непонятные сокращения</li>
              </ul>
              <Divider />
              <br/><b>Премодерация:</b><br/><br/>
              Обращение будет обработано модератором сайта, а также может быть подвергнуто коррекции согласно нормам этики и правилам
              правописания. Только после этого заявление будет опубликовано, включая, но не ограничиваясь следующими правками:
              Из текста обращения могут быть исключены сведения оскорбительного характера, содержащие клевету, порочащие сведения и иную
              информацию, наносящую вред чести, достоинству и деловой репутации, либо сообщения, используемые в целях диффамации
              Из текста обращения могут быть исключены его составные части: сведения, направленные на разжигание и возбуждение социальной,
              расовой, национальной, религиозной, сословной и родовой розни, предполагающие дискриминацию по мотивам происхождения,
              социального, должностного и имущественного положения, пола, расы, национальности, языка, отношения к религии. Убеждения,
              содержащие призывы к насильственному изменению конституционного строя и нарушению территориальной целостности Республики,
              вызывающие угрозу безопасности, жизни, здоровью, нравственности населения будут удалены.
              <br/><br/>Как правило, модерация обращения и подготовка даже промежуточного ответа на него занимает определенное время. В связи с чем, могут
              быть не приняты повторные (дублирующие) обращения, либо уточняющие причину не размещения ранее поданных заявлений или статус
              их текущей модерации.
              <br/><br/>Ответ на Ваше обращение будет направлен Вам только в электронном виде.
            </Dialog>
          </CardText>
        </Card>
      </div>
    );
  }
}

AddComplaint.propTypes = {
  categories: PropTypes.array.isRequired,
  regions: PropTypes.array.isRequired
};

export default createContainer(() => {
  return {
    categories: Categories.find({}).fetch(),
    regions: Regions.find({}).fetch(),
  }
}, AddComplaint);
