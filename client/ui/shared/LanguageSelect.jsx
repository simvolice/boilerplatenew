import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class LanguageSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 1
    }

    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  handleLanguageChange(event, index, value) { 
    // index started from zero, our langauge index started from 1
    index = index+1;
    this.setState({language: index}); 
    this.props.handler(index);
  }

  render() {
    return (
      <SelectField
          value={this.state.language}
          onChange={this.handleLanguageChange}
          autoWidth={true}
          floatingLabelText="Язык"
      >
        <MenuItem value={1} primaryText="Русский язык" />
        <MenuItem value={2} primaryText="Казахский язык" />
        <MenuItem value={3} primaryText="Английский язык" />

      </SelectField>
  );
  }
}
