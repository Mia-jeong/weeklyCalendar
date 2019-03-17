import React from "react";
import { connect } from "react-redux";

import { fetchDay } from "../../actions/dateActions";
const DateResetButton = props => {
  const onClick = () => {
    props.fetchDay();
  };
  return (
    <button className="ui blue basic button" onClick={onClick}>
      Reset
    </button>
  );
};

export default connect(
  null,
  { fetchDay }
)(DateResetButton);
