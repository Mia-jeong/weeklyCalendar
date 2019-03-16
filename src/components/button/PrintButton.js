import React from "react";

const PrintButton = props => {
  return (
    <button class="ui icon button" onClick={() => window.print()}>
      <i class="print icon" />
    </button>
  );
};

export default PrintButton;
