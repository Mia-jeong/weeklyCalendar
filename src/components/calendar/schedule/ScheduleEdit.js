import React, { Component } from "react";
import { connect } from "react-redux";
import { editSchedule, fetchDaySchedule } from "../../../actions/dateActions";
import { mapStateToPropsForSchedule } from "../../../utils/state";
import ScheduleForm from "./ScheduleForm";
import Card from "../../ui/form/Card";
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
      <Card label="Edit Schedule">
        <ScheduleForm
          onSubmit={this.onSubmit}
          date={date}
          start={start}
          initialValues={initials}
        />
      </Card>
    );
  }
}

export default connect(
  mapStateToPropsForSchedule,
  { editSchedule, fetchDaySchedule }
)(ScheduleEdit);
