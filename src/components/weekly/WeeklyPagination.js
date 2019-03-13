import React from "react";

import ArrowButton from "../button/ArrowButton";

const WeeklyPagination = props => {
  return (
    <div>
      <ArrowButton text="Prev" direction="left" />
      <label>12 </label>
      <ArrowButton text="Next" direction="right" />
    </div>
  );
};

export default WeeklyPagination;
