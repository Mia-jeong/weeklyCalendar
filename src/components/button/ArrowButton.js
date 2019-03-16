import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchDay } from "../../actions/dateActions";

import { mapStateToPropsForWeek } from "../../utils/state";
class ArrowButton extends Component {
  onClick = () => {
    this.props.fetchDay(
      this.props.standardDay.fullDateDash,
      this.props.value,
      this.props.flag
    );
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
  { fetchDay }
)(ArrowButton);
