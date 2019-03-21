import React from "react";
import history from "../history";
const TableDetail = props => {
  const clickMethod = () => {
    if (props.day) {
      let { fullDate } = props.day;
      history.push(`/index/create/${fullDate}/${props.id}`);
    }
  };

  const { colourClass } = props.day;
  const tdRender = () => {
    if (props.standard) {
      return <th data-label="Day">{props.time}</th>;
    }

    return (
      <td data-label="Day" onClick={clickMethod}>
        {props.time}
      </td>
    );
  };
  return <tr className={`weeklyTr ${colourClass}`}>{tdRender()}</tr>;
};

export default TableDetail;
