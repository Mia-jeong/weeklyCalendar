import React, { Component } from "react";

import TableDetail from "./TableDetail";
import ScheduleCard from "./ScheduleCard";
class DayTable extends Component {
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
    let start = 10;
    let end = 11;
    if (!this.props.standard) {
      return (
        <div>
          <ScheduleCard start={start} end={end} />{" "}
          <ScheduleCard start={16} end={17} colour={"#dd4b39"} />
        </div>
      );
    } else {
      return null;
    }
  }
  render() {
    return (
      <div style={this.divStyle()}>
        {this.scheduleCardRender()}

        <table className="ui calendarTable">
          <thead>
            <tr>
              <th>
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

export default DayTable;
