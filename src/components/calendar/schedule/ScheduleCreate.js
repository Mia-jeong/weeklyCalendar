import React, { Component } from "react";
import { connect } from "react-redux";
import { createSchedule } from "../../../actions/dateActions";
import ScheduleForm from "./ScheduleForm";
import Card from "../../ui/form/Card";
class ScheduleCreate extends Component {
  componentDidMount() {}

  onSubmit = formValues => {
    this.props.createSchedule({
      ...formValues,
      date: this.props.match.params.date
    });
  };

  render() {
    const { date, start } = this.props.match.params;
    const end = parseFloat(start) + 1.5;
    const initials = {
      start: start,
      end: end > 20 ? 20 : end,
      colour: "01"
    };
    return (
      <Card label="Create Schedule">
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
  null,
  { createSchedule }
)(ScheduleCreate);
