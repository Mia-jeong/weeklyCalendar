import React from "react";
import * as TableUtil from "../../utils/table";
import history from "../history";
const ScheduleCard = props => {
  const { start, end, customer, title } = props.detail;
  const onClick = () => {
    let { fullDate } = props;
    history.push(`/index/edit/${fullDate}/${start}`);
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

  const timeRender = () => {
    let startTemp = start;
    let endTemp = end;
    if (startTemp % 1 === 0.5) {
      startTemp = startTemp - 0.5 + ":30";
    }
    if (start >= 12) {
      startTemp += " p";
    }
    if (endTemp % 1 === 0.5) {
      endTemp = endTemp - 0.5 + ":30";
    }

    if (end >= 12) {
      endTemp += " p";
    }
    return startTemp + " - " + endTemp;
  };
  return (
    <div style={styleConfig} onClick={onClick}>
      <div className="scheduleCard">
        {timeRender()} <br />
        {customer} / {title}
      </div>
    </div>
  );
};

export default ScheduleCard;
