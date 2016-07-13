import React, {Component} from 'react';

export default class AddBlogRecord extends Component {
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
