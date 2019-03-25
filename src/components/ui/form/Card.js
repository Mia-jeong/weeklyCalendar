import React from "react";

const Card = props => {
  return (
    <div className="formBox">
      <h2>{props.label}</h2>
      <div className="ui segment">{props.children}</div>
    </div>
  );
};

export default Card;
