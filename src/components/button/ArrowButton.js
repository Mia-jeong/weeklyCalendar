import React from "react";

const ArrowButton = props => {
  return (
    <button className="ui icon button">
      <i className={`angle ${props.direction} icon`} />
    </button>
    // <button className={`ui ${props.direction} labeled icon button`}>
    //   <i className={`angle ${props.direction} icon`} />
    //   {props.text}
    // </button>
  );
};

export default ArrowButton;
