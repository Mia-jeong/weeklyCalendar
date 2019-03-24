import React from "react";

export const renderError = ({ error, touched }) => {
  if (touched && error) {
    return <div className="ui pointing red basic label">{error}</div>;
  }
};

export const renderInputWithButton = ({ input, label, meta, type, width }) => {
  const className = ` ${width} field ${
    meta.error && meta.touched ? "error" : ""
  }`;
  return (
    <div className={className}>
      <label>{label}</label>

      <div className="field">
        <div className="ui action input">
          <input {...input} autoComplete="off" type={type} />
          <button className="ui icon button">
            <i className="search icon" />
          </button>
        </div>

        {renderError(meta)}
      </div>
    </div>
  );
};

export const renderInput = ({ input, label, meta, type, width }) => {
  const className = ` ${width} field ${
    meta.error && meta.touched ? "error" : ""
  }`;
  return (
    <div className={className}>
      <label>{label}</label>
      <input {...input} autoComplete="off" type={type} />
      {renderError(meta)}
    </div>
  );
};

export const renderSelect = ({ input, label, meta, options, width }) => {
  const className = ` ${width} field ${
    meta.error && meta.touched ? "error" : ""
  }`;
  return (
    <React.Fragment>
      <div className={className}>
        <label>{label}</label>
        <select {...input} className="ui fluid search dropdown">
          {options}
        </select>
        {renderError(meta)}
      </div>
    </React.Fragment>
  );
};

export const renderTextArea = ({ input, label, meta, rows }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <textarea {...input} rows={rows || ""} />
    </div>
  );
};

export const onSubmit = formValues => {
  this.props.onSubmit(formValues);
};
