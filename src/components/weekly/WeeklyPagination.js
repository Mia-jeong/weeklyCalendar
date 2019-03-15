import React from "react";
import { connect } from "react-redux";
import ArrowButton from "../button/ArrowButton";
import DateResetButton from "../button/DateResetButton";
import { mapStateToPropsForWeek } from "../../utils/state";
import * as DateUtil from "../../utils/date";

const WeeklyPagination = props => {
  const monthDiffBefore = DateUtil.dateDiff(
    null,
    props.standardDay,
    "before",
    -1
  );

  const monthDiffAfter = DateUtil.dateDiff(null, props.standardDay, "after", 1);

  const dateRender = () => {
    if (props.standardDay) {
      const { fullYear, month } = props.standardDay;
      return (
        <label>
          <strong>{` ${fullYear} / ${month + 1} `}</strong>
        </label>
      );
    }
    return "Loading..";
  };

  return (
    <div style={{ display: "inline-block" }}>
      <ArrowButton direction="double left" value={monthDiffBefore * -1} />
      <ArrowButton direction="left" value={-7} />
      {dateRender()}
      <ArrowButton direction="right" value={7} />
      <ArrowButton direction="double right" value={monthDiffAfter} />

      <DateResetButton />
    </div>
  );
};

export default connect(mapStateToPropsForWeek)(WeeklyPagination);
