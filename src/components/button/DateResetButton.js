import React from "react";
import { connect } from "react-redux";

import { fetchDayAndIncrement } from "../../actions/dateActions";
const DateResetButton = props => {
  const onClick = () => {
    props.fetchDayAndIncrement(0, true);
  };
  return (
    <button className="ui blue basic button" onClick={onClick}>
      Reset
    </button>
  );
};

export default connect(
  null,
  { fetchDayAndIncrement }
)(DateResetButton);
