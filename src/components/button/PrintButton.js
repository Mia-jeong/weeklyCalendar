import React from "react";

const PrintButton = props => {
  return (
    <button className="ui icon button" onClick={() => window.print()}>
      <i className="print icon" />
    </button>
  );
};

export default PrintButton;
