import React from "react";
import { connect } from "react-redux";
import ArrowButton from "../../ui/button/ArrowButton";
import DateResetButton from "../../ui/button/DateResetButton";
import PrintButton from "../../ui/button/PrintButton";
import { mapStateToPropsForWeek } from "../../../utils/state";
// import * as DateUtil from "../../utils/date";

const WeeklyPagination = props => {
  const { standardDay } = props;

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
    <div style={{ display: "inline-block" }}>
      <ArrowButton direction="double left" value={-1} flag="M" />
      <ArrowButton direction="left" value={-7} flag="D" />
      {dateRender()}
      <ArrowButton direction="right" value={7} flag="D" />
      <ArrowButton direction="double right" value={1} flag="M" />
      <DateResetButton />

      <PrintButton />
    </div>
  );
};

export default connect(mapStateToPropsForWeek)(WeeklyPagination);
