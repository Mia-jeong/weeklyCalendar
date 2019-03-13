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
    let tdColour = this.props.colour || null;
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
          colour={tdColour}
          standard={this.props.standard}
        />
      );
    }

    return trs;
  }
  scheduleCardRender() {
    let start = 14;
    let end = 16;
    if (!this.props.standard) {
      return <ScheduleCard start={start} end={end} colour={"#5d9fe0"} />;
    } else {
      return null;
    }
  }
  render() {
    return (
      <div style={this.divStyle()}>
        {this.scheduleCardRender()}
        <table className="ui small selectable  celled table">
          <thead>
            <tr style={{ height: "40px" }}>
              <th>{this.props.day}</th>
            </tr>
          </thead>
          <tbody>{this.trRender()}</tbody>
        </table>
      </div>
    );
  }
}

export default DayTable;
