import React from "react";
import ScheduleCard from "./ScheduleCard";
const DayTable = props => {
  const tdColour = props.colour;
  const clickMethod = () => {
    if (!props.standard) {
      return alert(props.id);
    }
  };

  return (
    <tr style={{ height: "40px" }}>
      <td
        data-label="Day"
        onClick={clickMethod}
        style={{ backgroundColor: tdColour }}
      >
        {props.time}
      </td>
    </tr>
  );
};

export default DayTable;
