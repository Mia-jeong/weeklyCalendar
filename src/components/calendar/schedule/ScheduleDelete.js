import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import history from "../../history";
import Modal from "../../Modal";
import { fetchDaySchedule, deleteSchedule } from "../../../actions/dateActions";
import { mapStateToPropsForSchedule } from "../../../utils/state";
import { dateFormat, timeRender } from "../../../utils/date";

class ScheduleDelete extends Component {
  componentDidMount() {
    this.props.fetchDaySchedule(this.props.match.params.date);
  }

  renderActions() {
    const { start, date } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          className="ui button negative"
          onClick={() => this.props.deleteSchedule(date, start)}
        >
          Delete
        </button>
        <Link className="ui button" to={`/index/detail/${date}/${start}`}>
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    const date = dateFormat("/", this.props.schedule.date);
    const start = timeRender(this.props.schedule.start, "PM");
    const end = timeRender(this.props.schedule.end, "PM");
    if (!this.props.schedule) {
      return "해당 스케쥴을 삭제 하시겠습니까?";
    }
    return (
      <div>
        <div>
          <h4>해당 고객 스케쥴을 삭제하시겠습니까 ?</h4>
          <p>
            <strong>{`이름: ${this.props.schedule.customer}`}</strong>
          </p>
          <p>
            <strong>{`날짜: ${date}`}</strong>
          </p>
          <p>
            <strong>{`시간: ${start}-${end}`}</strong>
          </p>
        </div>
      </div>
    );
  }

  render() {
    const { start, date } = this.props.match.params;
    return (
      <Modal
        onDismiss={() => history.push(`/index/detail/${date}/${start}`)}
        title="Delete Schedule"
        actions={this.renderActions()}
        content={this.renderContent()}
      />
    );
  }
}

export default connect(
  mapStateToPropsForSchedule,
  { fetchDaySchedule, deleteSchedule }
)(ScheduleDelete);
