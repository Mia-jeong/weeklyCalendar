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
    return (
      <div>
        <h3>Create Schedule</h3>
        <ScheduleForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createSchedule }
)(ScheduleCreate);
