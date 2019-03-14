import React, { Component } from "react";
import { connect } from "react-redux";
import ArrowButton from "../button/ArrowButton";
import DateResetButton from "../button/DateResetButton";
import { mapStateToPropsForWeek } from "../../utils/state";

const WeeklyPagination = props => {
  const dateRender = () => {
    console.log(props.standardDay);
    if (props.standardDay) {
      const { date, fullYear, month, dayNameKr } = props.standardDay;
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
      <ArrowButton text="Prev" direction="left" value={-7} />
      {dateRender()}
      <ArrowButton text="Next" direction="right" value={7} />
      <DateResetButton />
    </div>
  );
};

export default connect(mapStateToPropsForWeek)(WeeklyPagination);
