import React from "react";
import * as TableUtil from "../../../utils/table";
import { timeRender } from "../../../utils/date";
import history from "../../history";
const ScheduleCard = props => {
  const { start, end, customer, title } = props.detail;
  const onClick = () => {
    let { fullDate } = props;
    history.push(`/index/detail/${fullDate}/${start}`);
  };

  const { startPoint, height, colour } = TableUtil.cellHeightCaculator(
    props.detail,
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

  const timeSetting = () => {
    let startTemp = timeRender(start, "p");
    let endTemp = timeRender(end, "p");

    return startTemp + " - " + endTemp;
  };
  return (
    <div style={styleConfig} onClick={onClick} draggable>
      <div className="scheduleCard">
        {timeSetting()} <br />
        {customer} / {title}
      </div>
    </div>
  );
};

export default ScheduleCard;
