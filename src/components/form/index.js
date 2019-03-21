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

export const renderInput = ({ input, label, flag, meta, type, width }) => {
  const renderHelper = () => {
    if (flag) {
      return (
        <div className="two fields">
          <div className="field">
            <input {...input} autoComplete="off" type={type} />
          </div>
          <div className="field">
            <button className="ui button">Search</button>
          </div>
        </div>
      );
    }

    return <input {...input} autoComplete="off" type={type} />;
  };
  return (
    <div className={`${width} field`}>
      <label>{label}</label>
      {renderHelper()}
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
    <div className="field">
      <label>{label}</label>
      <textarea rows={rows || ""} />
    </div>
  );
};

export const onSubmit = formValues => {
  this.props.onSubmit(formValues);
};
