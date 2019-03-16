import React from "react";
import { connect } from "react-redux";
import ArrowButton from "../button/ArrowButton";
import DateResetButton from "../button/DateResetButton";
import PrintButton from "../button/PrintButton";
import { mapStateToPropsForWeek } from "../../utils/state";
// import * as DateUtil from "../../utils/date";

const WeeklyPagination = props => {
  const { standardDay } = props;

  // const monthDiffBefore = DateUtil.dateDiff(null, standardDay, -1, "M");

  // const monthDiffAfter = DateUtil.dateDiff(null, standardDay, 1, "M");

  const dateRender = () => {
    if (standardDay) {
      const { fullYear, month } = standardDay;
      return (
        <label>
          <strong>{` ${fullYear} / ${month} `}</strong>
        </label>
      );
    }
    return "Loading..";
  };

  return (
    <div>
      <div style={{ display: "inline-block", align: "center" }}>
        <ArrowButton direction="double left" value={-1} flag="M" />
        <ArrowButton direction="left" value={-7} flag="D" />
        {dateRender()}
        <ArrowButton direction="right" value={7} flag="D" />
        <ArrowButton direction="double right" value={1} flag="M" />
        <DateResetButton />
      </div>
      <div style={{ display: "inline-block", align: "right" }}>
        <PrintButton />{" "}
      </div>
    </div>
  );
};

export default connect(mapStateToPropsForWeek)(WeeklyPagination);
