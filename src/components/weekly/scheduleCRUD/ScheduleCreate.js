import React, { Component } from "react";
import { connect } from "react-redux";
import { createSchedule } from "../../../actions/dateActions";
import ScheduleForm from "./ScheduleForm";
class ScheduleCreate extends Component {
  componentDidMount() {}

  onSubmit = formValues => {
    this.props.createSchedule(formValues);
  };

  render() {
    const { date, start } = this.props.match.params;
    return (
      <div>
        <h2>Create Schedule</h2>
        <ScheduleForm onSubmit={this.onSubmit} date={date} start={start} />
      </div>
    );
  }
}

export default connect(
  null,
  { createSchedule }
)(ScheduleCreate);
