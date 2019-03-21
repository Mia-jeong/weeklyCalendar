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
    const { date, start } = this.props.match.params;
    return (
      <div>
        <h2>Edit Schedule</h2>
        <ScheduleForm onSubmit={this.onSubmit} date={date} start={start} />
      </div>
    );
  }
}

export default connect(
  null,
  { editSchedule }
)(ScheduleEdit);
