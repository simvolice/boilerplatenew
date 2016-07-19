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

import ActionDelete from 'material-ui/svg-icons/action/delete';

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
    display: 'block'
  },
  checkbox: {
    marginBottom: 16,
  },
  select: {
    marginBottom: 16
  },
  card: {
    height: 230
  },
  ruleActionLabelStyle: {
    fontSize: 15,
  },
  deleteButtonStyle: {
    marginTop: 20,
  }
};

export default class AddComplaint extends Component {
  constructor(props) {
      super(props);

      this.state = {
        caseCheckboxValue: false,
        rulesOpen: false,
        subCategoryNames: [],
        districtNames: [],
        caseCardStyle: {
          display: 'none'
        },
        anotherRegionCardStyle: {
          height: 300,
          display: 'none'
        },
        categoryValue: '',
        categoryText: '',
        subCategoryValue: '',
        subCategoryText: '',
        regionValue: '',
        regionText: '',
        districtValue: '',
        districtText: ''
      };
  }

  getCategoryNames() {
    return this.props.categories.map((category) => {
      return {
        text: category.name_ru,
        value: category._id
      }
    });
  }

  handleCategoryUpdate(value) {
    const currentCategory = this.props.categories.filter((category) => {
      return category._id === value.value;
    });

    const subCategoryNames = currentCategory[0].sub_category_ru.map((subCategory, index) => {
      return {
        text: subCategory,
        value: index
      };
    });

    this.setState({
      subCategoryNames,
      categoryValue: value.value,
      categoryText: value.text
    });
  }

  handleCategoryInput(categoryText) {
    this.setState({categoryText})
  }

  handleSubCategoryUpdate(value) {
    this.setState({
      subCategoryValue: value.value,
      subCategoryText: value.text
    });
  }

  handleSubCategoryInput(subCategoryText) {
    this.setState({subCategoryText})
  }

  clearAutoComplete(valueNames) {
    valueNames.forEach((item) => {
      this.setState({[item]: ''});
    });
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

  openRules() {
    this.setState({rulesOpen: true});
  }

  closeRules() {
    this.setState({rulesOpen: false});
  }

  handleCaseCheckboxChange(event, isInputChecked) {
    if(isInputChecked) {
      const caseCardStyle = {
        display: '',
      };
      this.setState({ caseCardStyle });
    }
    else {
      const caseCardStyle = {
        display: 'none',
        height: 300,
      };
      this.setState({ caseCardStyle });
    }

    this.setState({caseCheckboxValue: isInputChecked});
  }

  handleAppealReceiverRadio(event, value) {
    if(value === 'another-staff') {
      let anotherRegionCardStyle = {
        height: 300,
        display: ''
      }

      this.setState({anotherRegionCardStyle});
    }
    else {
      let anotherRegionCardStyle = {
        height: 300,
        display: 'none'
      }

      this.setState({anotherRegionCardStyle});
    }
  }

  render() {
    const modalActions = [
      <FlatButton
        label="Закрыть"
        primary={true}
        onTouchTap={this.closeRules.bind(this)}/>
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
            <div className="col s10">
              <AutoComplete
               floatingLabelText="Выберите категорию"
               filter={AutoComplete.caseInsensitiveFilter}
               openOnFocus={true}
               dataSource={this.getCategoryNames()}
               onNewRequest={this.handleCategoryUpdate.bind(this)}
               onUpdateInput={this.handleCategoryInput.bind(this)}
               fullWidth={true}
               value={this.state.categoryValue}
               searchText={this.state.categoryText}
              />
            </div>
            <div className="col s1">
              <RaisedButton
                icon={<ActionDelete />}
                style={styles.deleteButtonStyle}
                onClick={this.clearAutoComplete.bind(this, ['categoryText', 'categoryValue', 'subCategoryText', 'subCategoryValue'])}
              />
            </div>
            <div className="col s10">
              <AutoComplete
                floatingLabelText="Выберите под-категорию"
                filter={AutoComplete.caseInsensitiveFilter}
                openOnFocus={true}
                dataSource={this.state.subCategoryNames}
                onNewRequest={this.handleSubCategoryUpdate.bind(this)}
                onUpdateInput={this.handleSubCategoryInput.bind(this)}
                fullWidth={true}
                value={this.state.subCategoryValue}
                searchText={this.state.subCategoryText}
              />
            </div>
            <div className="col s1">
              <RaisedButton
                icon={<ActionDelete />}
                style={styles.deleteButtonStyle}
                onClick={this.clearAutoComplete.bind(this, ['subCategoryText', 'subCategoryValue'])}
              />
            </div>
          </CardText>
        </Card>
        <div className="row">
          <Card className='col s12'>
            <CardHeader title="Обращение" />
            <CardText className='row'>
                <RadioButtonGroup name="appealTime" defaultSelected="first-time" className="col s8" style={{display: 'flex'}}>
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
                  onCheck={this.handleCaseCheckboxChange.bind(this)}
                  checked={this.state.caseCheckboxValue}
                  className="col s3"
                />
            </CardText>
          </Card>
          <Card className="col s12" style={this.state.caseCardStyle}>
            <CardHeader title="Категория" />
            <CardText>
                <RadioButtonGroup
                  name="appealTime"
                  defaultSelected="first-time"
                  className="col s12"
                  style={{display: 'flex'}} >
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
          <Card className="col s12">
            <CardHeader title="Куда подать обращение" />
            <CardText>
              <RadioButtonGroup
                name="appealTime"
                className="col s12"
                onChange={this.handleAppealReceiverRadio.bind(this)}
                style={{display: 'flex'}}  >
                <RadioButton
                  value="central-staff"
                  label="Центральный аппарат"
                  style={styles.radioButton} />
                <RadioButton
                  value="own-staff"
                  label="Свой регион"
                  style={styles.radioButton} />
                <RadioButton
                  value="another-staff"
                  label="Другой регион"
                  style={styles.radioButton} />
              </RadioButtonGroup>
            </CardText>
          </Card>
          <Card className="col s12"  style={this.state.anotherRegionCardStyle}>
            <CardHeader title="Другой регион" />
            <CardText>
              <div className="col s10">
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
                />
              </div>
              <div className="col s10">
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
                />
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
            <div className="row" style={{textAlign: 'right'}}>
              <span>
                Нажимая кнопку "подать обращение", вы соглашаетесь с
                <a href="#" onClick={this.openRules.bind(this)} > правилами
                подачи обращения</a>&nbsp;&nbsp;
              </span>
              <RaisedButton labelStyle={styles.ruleActionLabelStyle} label="подать обращение" primary={true} />
              <br/><span style={{color: 'grey'}}> Размер загружаемого файла не может превышать 10 МБ</span>
            </div>
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
