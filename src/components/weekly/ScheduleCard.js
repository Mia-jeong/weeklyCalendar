import React, { Component } from "react";

const ScheduleCard = props => {
  let { start, end } = props;
  let heightCnt = (end - start) / 0.5 + 1;
  let startCnt = start / 0.5 - 18,
    topHeight = 58,
    cellHeight = 40;
  let startPoint = topHeight + cellHeight * startCnt,
    height = cellHeight * heightCnt,
    colour = props.colour || "#ddd";

  // console.log("startPoint", startPoint);
  // console.log("height", height);
  const styleConfig = {
    position: "absolute",
    top: `${startPoint}px`,
    width: "120px",
    height: `${height}px`,
    border: "2px solid white",
    backgroundColor: colour
  };
  return (
    <div style={styleConfig} onClick={() => alert("card click")}>
      example
    </div>
  );
};

export default ScheduleCard;
