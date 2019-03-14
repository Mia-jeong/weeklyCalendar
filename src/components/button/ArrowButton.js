import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchDayAndIncrement } from "../../actions/dateActions";

import { mapStateToPropsForWeek } from "../../utils/state";
class ArrowButton extends Component {
  onClick = () => {
    this.props.fetchDayAndIncrement(this.props.value);
  };
  render() {
    return (
      <button className="ui icon button" onClick={this.onClick}>
        <i className={`angle ${this.props.direction} icon`} />
      </button>
    );
  }
}

export default connect(
  mapStateToPropsForWeek,
  { fetchDayAndIncrement }
)(ArrowButton);
