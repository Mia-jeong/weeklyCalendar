import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { dateFormat } from "../../../utils/date";
import {
  renderInput,
  renderSelect,
  renderTextArea,
  onSubmit
} from "../../form";

class ScheduleForm extends Component {
  render() {
    return (
      <div className="ui segment sBox">
        <form className="ui form " onSubmit={this.props.handleSubmit(onSubmit)}>
          <h4 className="ui dividing header">
            DATE: {dateFormat("/", this.props.date)}
          </h4>
          <div className="three fields">
            <Field component={renderSelect} name="start" label="Start" />
            <Field component={renderSelect} name="end" label="End" />
            <Field
              component={renderInput}
              name="customer"
              label="Customer"
              flag={true}
              onClick={() => {
                alert("연구중");
              }}
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
