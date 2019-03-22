import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { dateFormat } from "../../../utils/date";
import { coloursList } from "../../../utils/table";
import {
  renderInput,
  renderInputWithButton,
  renderSelect,
  renderTextArea
} from "../../form";

class ScheduleForm extends Component {
  optionTimeRender() {
    const options = [];
    for (let index = 9; index <= 20; index += 0.5) {
      let time = `${index}:00`;
      if (index % 1 === 0.5) {
        time = `${index - 0.5}:30`;
      }
      options.push(
        <option key={index} value={index}>
          {time}
        </option>
      );
    }
    return options;
  }

  optionColourRender() {
    const colours = coloursList;
    const options = colours.map(colour => {
      return (
        <option
          value={colour.colourId}
          style={{ backgroundColor: colour.match, color: "white" }}
          key={colour.colourId}
        >
          {colour.colour}
        </option>
      );
    });

    return options;
  }

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <div className="ui segment sBox">
        <form
          className="ui form error"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <h4 className="ui dividing header">
            DATE: {dateFormat("/", this.props.date)}
          </h4>
          <div className="two fields">
            <Field
              name="start"
              component={renderSelect}
              label="Start"
              options={this.optionTimeRender()}
            />
            <Field
              name="end"
              component={renderSelect}
              label="End"
              options={this.optionTimeRender()}
            />
          </div>
          <div className="two fields">
            <Field
              name="customer"
              component={renderInputWithButton}
              label="Customer"
              onClick={() => {
                alert("연구중");
              }}
            />

            <Field
              name="colour"
              component={renderSelect}
              label="Colour"
              options={this.optionColourRender()}
            />
          </div>
          <Field
            name="title"
            component={renderInput}
            label="Title"
            type="text"
          />
          <Field name="contents" component={renderTextArea} label="Contents" />
          <button className="ui primary button">Submit</button>
        </form>
      </div>
    );
  }
}
const validate = formValues => {
  const error = {};
  if (formValues.end < formValues.start) {
    error.end = "* 종료시간은 시작 시간보다 이후 일 수 없습니다.";
  }
  if (!formValues.customer) {
    error.customer = "* 고객 이름을 선택해주세요.";
  }

  if (!formValues.title) {
    error.title = "* 제목을 입력해주세요.";
  }
  return error;
};
export default reduxForm({ form: "scheduleForm", validate })(ScheduleForm);
