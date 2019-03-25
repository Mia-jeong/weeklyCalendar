import React from "react";
import * as DateUtil from "../../../utils/date";

export default class Calendar extends React.Component {
  state = {
    day: DateUtil.getDateInfo(),
    calendarSetting: DateUtil.getCalendarConfig
  };

  weekdaysRender() {
    const { weekdaysShort } = this.state.calendarSetting;
    //weekdays
    const weekdays = weekdaysShort.map(day => {
      return (
        <th key={day} className="week-day">
          {day}
        </th>
      );
    });
    return weekdays;
  }
  slotsRender() {
    const { firstDayOfMonth, lastDayOfMonth } = this.state.day;
    const blanks = [];

    //blanks
    for (let index = 0; index < firstDayOfMonth; index++) {
      blanks.push(
        <td key={index * 15} className="emptySlot">
          {""}
        </td>
      );
    }

    //total days
    const daysInMonth = [];
    for (let d = 1; d <= lastDayOfMonth; d++) {
      daysInMonth.push(
        <td key={d} className="day">
          <span>{d}</span>
        </td>
      );
    }

    var totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        let insertRow = cells.slice();
        rows.push(insertRow);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        let insertRow = cells.slice();
        rows.push(insertRow);
      }
    });

    let trElems = rows.map((d, i) => {
      return <tr key={i * 100}>{d}</tr>;
    });
    return trElems;
  }

  dateMove(value, flag) {
    this.setState({
      day: DateUtil.getDateInfo(this.state.day.fullDate, value, flag)
    });
  }

  render() {
    const { fullYear, month } = this.state.day;
    const engMonth = this.state.calendarSetting.months[month - 1];
    return (
      <div className="calendar-container">
        <table className="calendar">
          <thead>
            <tr>
              <th colSpan="7" className="calendar-header">
                <div>
                  <i
                    className="angle double left icon"
                    onClick={() => this.dateMove(-1, "Y")}
                  />
                  <i
                    className="angle left icon"
                    onClick={() => this.dateMove(-1, "M")}
                  />
                  <strong>{`${fullYear}, ${engMonth}`}</strong>
                  <i
                    className="angle right icon"
                    onClick={() => this.dateMove(1, "M")}
                  />
                  <i
                    className="angle double right icon"
                    onClick={() => this.dateMove(1, "Y")}
                  />
                  <i
                    className="sync alternate blue icon"
                    onClick={() =>
                      this.setState({ day: DateUtil.getDateInfo() })
                    }
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>{this.weekdaysRender()}</tr>
            {this.slotsRender()}
          </tbody>
        </table>
      </div>
    );
  }
}
