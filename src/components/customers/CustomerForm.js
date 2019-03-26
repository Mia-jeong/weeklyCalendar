import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import * as FormUtil from "../ui/form";

class CustomerForm extends Component {
  onSubmit(formValues) {
    this.props.onSubmit(formValues);
  }

  options() {
    return (
      <React.Fragment>
        <option value="01">Female</option>
        <option value="02">Male</option>
        <option value="03">Common Gender</option>
        <option value="04">Neuter</option>
      </React.Fragment>
    );
  }

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <div className="two fields">
          <Field
            name="name"
            label="name"
            type="text"
            component={FormUtil.renderInput}
          />
          <Field
            name="phone"
            label="phone"
            type="text"
            component={FormUtil.renderInput}
          />
        </div>
        <div className="two fields">
          <Field
            name="birth"
            label="birth"
            type="date"
            component={FormUtil.renderInput}
          />
          <Field
            name="sex"
            label="sex"
            component={FormUtil.renderSelect}
            options={this.options()}
          />
        </div>
        <Field
          name="contents"
          label="contents"
          component={FormUtil.renderTextArea}
        />
        <button className="ui primary button">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const error = {};
  if (!formValues.name) {
    error.name = "* 이름을 입력해주세요.";
  }
  if (!formValues.phone) {
    error.phone = "* 핸드폰 번호를 입력해주세요.";
  }

  return error;
};

export default reduxForm({ form: "customerForm", validate })(CustomerForm);
