import React, { Component } from "react";
import { connect } from "react-redux";
import { editSchedule } from "../../../actions/dateActions";
import ScheduleForm from "./ScheduleForm";
class ScheduleEdit extends Component {
  componentDidMount() {}

  onSubmit = formValues => {
    this.props.editSchedule(formValues);
  };

  render() {
    return (
      <div>
        <h3>Edit Schedule</h3>
        <ScheduleForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { editSchedule }
)(ScheduleEdit);
