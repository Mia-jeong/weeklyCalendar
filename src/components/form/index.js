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
            {renderError(meta)}
          </div>

          <div className="field">
            <button className="ui button">Search</button>
          </div>
        </div>
      );
    }

    return (
      <React.Fragment>
        <input {...input} autoComplete="off" type={type} />
        {renderError(meta)}
      </React.Fragment>
    );
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
      {renderError(meta)}
    </div>
  );
};

export const renderTextArea = ({ input, label, meta, rows }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <textarea rows={rows || ""} />
      {renderError(meta)}
    </div>
  );
};

export const onSubmit = formValues => {
  this.props.onSubmit(formValues);
};
