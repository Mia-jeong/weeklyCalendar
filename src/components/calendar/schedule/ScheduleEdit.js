import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { editSchedule, fetchDaySchedule } from "../../../actions/dateActions";
import ScheduleForm from "./ScheduleForm";
class ScheduleEdit extends Component {
  componentDidMount() {
    this.props.fetchDaySchedule(this.props.match.params.date);
  }

  onSubmit = formValues => {
    this.props.editSchedule({
      ...formValues,
      date: this.props.match.params.date
    });
  };

  render() {
    const { date, start } = this.props.match.params;
    const initials = this.props.schedule;
    return (
      <div>
        <h2>Edit Schedule</h2>
        <ScheduleForm
          onSubmit={this.onSubmit}
          date={date}
          start={start}
          initialValues={initials}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { date, start } = ownProps.match.params;
  const schedule = state.scheduleList;

  return {
    schedule: schedule[date][start]
  };
};
export default connect(
  mapStateToProps,
  { editSchedule, fetchDaySchedule }
)(ScheduleEdit);
