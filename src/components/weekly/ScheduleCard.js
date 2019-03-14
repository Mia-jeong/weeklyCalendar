import React from "react";
import * as TableUtil from "../../utils/table";

const ScheduleCard = props => {
  let { startPoint, height, colour } = TableUtil.cellHeightCaculator(
    props,
    0.5,
    18,
    52,
    24.8
  );

  const styleConfig = {
    position: "absolute",
    top: `${startPoint}px`,
    left: "3px",
    width: "120px",
    height: `${height}px`,
    border: "2px solid white",
    backgroundColor: colour,
    borderRadius: "5px"
  };
  return (
    <div style={styleConfig} onClick={() => alert("card click")}>
      example
    </div>
  );
};

export default ScheduleCard;
