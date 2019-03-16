import React, { Component } from "react";
import { connect } from "react-redux";
import Daytable from "./DayTable";
import WeeklyPagination from "./WeeklyPagination";
import * as DateUtil from "../../utils/date";

import { mapStateToPropsForWeek } from "../../utils/state";
class Week extends Component {
  componentDidMount() {}
  weekRender() {
    if (this.props.standardDay) {
      const weekList = DateUtil.weekList(
        this.props.standardDay.fullDateDash,
        this.props.standardDay.day
      );
      // console.log(weekList);
      return weekList.map(day => {
        return <Daytable day={day} key={day.date} />;
      });
    }
    return "Loading";
  }
  render() {
    return (
      <div>
        <div>
          <WeeklyPagination />
        </div>
        <div>
          <Daytable
            day={{
              dayNameEng: "Time",
              date: "Day"
            }}
            standard={true}
          />
          {this.weekRender()}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToPropsForWeek)(Week);
