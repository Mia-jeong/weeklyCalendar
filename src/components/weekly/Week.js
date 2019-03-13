import React, { Component } from "react";
import Daytable from "./DayTable";
import WeeklyPagination from "./WeeklyPagination";

class Week extends Component {
  render() {
    return (
      <div>
        <div>
          <WeeklyPagination />
        </div>
        <div>
          <Daytable day={"Time/Day"} colour={"#f9fafb"} standard={true} />
          <Daytable day={1} />
          <Daytable day={2} />
          <Daytable day={3} />
          <Daytable day={4} />
          <Daytable day={5} />
          <Daytable day={6} />
          <Daytable day={7} />
        </div>
      </div>
    );
  }
}

export default Week;
