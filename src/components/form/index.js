import React from "react";

export const renderError = ({ error, touched }) => {
  if (touched && error) {
    return (
      <div className="ui error message">
        <div className="header">{error}</div>
      </div>
    );
  }
};

export const renderInput = ({ input, label, flag, meta, type }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <input {...input} autoComplete="off" type={type} />
      {flag && <button className="ui button primary">Search</button>}
    </div>
  );
};

export const renderSelect = ({ input, label, meta }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <select {...input} className="ui fluid search dropdown">
        <option>9:00</option>
      </select>
    </div>
  );
};

export const renderTextArea = ({ input, label, meta, rows }) => {
  return (
    <div class="field">
      <label>{label}</label>
      <textarea rows={rows || ""} />
    </div>
  );
};

export const onSubmit = formValues => {
  this.props.onSubmit(formValues);
};
