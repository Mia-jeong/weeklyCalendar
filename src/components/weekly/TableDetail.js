import React from "react";
const DayTable = props => {
  const clickMethod = () => {
    if (!props.standard) {
      return alert(props.id);
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
  return <tr className={`calendarTr ${colourClass}`}>{tdRender()}</tr>;
};

export default DayTable;
