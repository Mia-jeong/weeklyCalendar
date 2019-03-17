import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDaySchedule } from "../../actions/dateActions";
import TableDetail from "./TableDetail";
import ScheduleCard from "./ScheduleCard";
class DayTable extends Component {
  componentDidMount() {
    this.props.fetchDaySchedule(this.props.day.fullDate);
  }
  divStyle() {
    const width = this.props.width || "130px";
    return {
      display: "inline-block",
      width: width,
      position: "relative"
    };
  }

  trRender() {
    let trs = [];
    for (let index = 9; index <= 20; index += 0.5) {
      let time = `${index}:00`;
      if (index % 1 === 0.5) {
        time = `${index - 0.5}:30`;
      }
      trs.push(
        <TableDetail
          time={time}
          key={index}
          id={index}
          standard={this.props.standard}
          day={this.props.day}
        />
      );
    }

    return trs;
  }
  scheduleCardRender() {
    const { daySchedule } = this.props;

    if (daySchedule) {
      console.log("daySchedule", daySchedule);
      return daySchedule.map(d => {
        console.log(d);
        return (
          <ScheduleCard
            start={d.startTime}
            end={d.endTime}
            colour={d.colour}
            key={d.startTime}
          />
        );
      });
    }

    return null;
  }
  render() {
    return (
      <div style={this.divStyle()}>
        {this.scheduleCardRender()}

        <table className="ui calendarTable">
          <thead>
            <tr>
              <th className={`calendarTr ${this.props.day.colourClass}`}>
                {this.props.day.dayNameEng} / {this.props.day.date}
              </th>
            </tr>
          </thead>
          <tbody>{this.trRender()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const daySchedule = state.scheduleList[ownProps.day.fullDate];
  const abc = daySchedule ? Object.values(daySchedule) : [];

  return { daySchedule: daySchedule ? Object.values(daySchedule) : [] };
};
export default connect(
  mapStateToProps,
  { fetchDaySchedule }
)(DayTable);
