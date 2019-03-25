import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { editSchedule, fetchDaySchedule } from "../../../actions/dateActions";
import { mapStateToPropsForSchedule } from "../../../utils/state";
import { dateFormat, timeRender } from "../../../utils/date";
import Card from "../../ui/form/Card";
class ScheduleDetail extends Component {
  componentDidMount() {
    this.props.fetchDaySchedule(this.props.match.params.date);
  }

  render() {
    const { date, start } = this.props.match.params;

    return (
      <Card label="Schedule Detail">
        <table className="ui definition table scheduleDetail">
          <tbody>
            <tr>
              <td className="four wide column">Date</td>
              <td>{dateFormat("/", this.props.match.params.date)}</td>
            </tr>
            <tr>
              <td>Start</td>
              <td>{timeRender(this.props.schedule.start, "PM")}</td>
            </tr>
            <tr>
              <td>End</td>
              <td>{timeRender(this.props.schedule.end, "PM")}</td>
            </tr>
            <tr>
              <td>Customer</td>
              <td>{this.props.schedule.customer}</td>
            </tr>
            <tr>
              <td>Title</td>
              <td>{this.props.schedule.title}</td>
            </tr>
            <tr>
              <td>Contents</td>
              <td>{this.props.schedule.contents}</td>
            </tr>
          </tbody>
        </table>
        <Link
          className="ui right floated primary button"
          to={`/index/edit/${date}/${start}`}
        >
          Edit
        </Link>
        <Link className="ui button" to={`/index/delete/${date}/${start}`}>
          Delete
        </Link>
      </Card>
    );
  }
}

export default connect(
  mapStateToPropsForSchedule,
  { editSchedule, fetchDaySchedule }
)(ScheduleDetail);
