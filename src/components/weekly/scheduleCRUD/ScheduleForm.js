import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import {
  renderInput,
  renderSelect,
  renderTextArea,
  onSubmit
} from "../../form";

class ScheduleForm extends Component {
  render() {
    return (
      <div className="fields">
        <form
          className="ui form error"
          onSubmit={this.props.handleSubmit(onSubmit)}
        >
          <div className="six wide field">
            <Field
              component={renderInput}
              name="date"
              label="Date"
              type="text"
            />
            <Field component={renderSelect} name="start" label="Start" />
            <Field component={renderSelect} name="end" label="End" />
            <Field
              component={renderInput}
              name="customer"
              label="Customer"
              flag={true}
            />
          </div>
          <Field
            component={renderInput}
            name="title"
            label="Title"
            type="text"
          />
          <Field component={renderTextArea} name="contents" label="Contents" />
          <button className="ui primary button">Submit</button>
        </form>
      </div>
    );
  }
}
const validate = values => {
  const errors = {};
  if (!values.start) {
    errors.start = "시작 시간을 선택 해주세요.";
  }
  if (!values.password) {
    errors.end = "종료 시간을 선택 해주세요.";
  }

  if (!values.customer) {
    errors.customer = "고객이름을 입력해주세요.";
  }

  if (!values.title) {
    errors.title = "일정 제목을 입력해주세요.";
  }
  return errors;
};
export default reduxForm({ form: "scheduleForm", validate })(ScheduleForm);
