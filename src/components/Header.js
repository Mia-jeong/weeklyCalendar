import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="ui menu">
        <a className="header item" href="/">
          Weekly
        </a>
        <a className="item" href="/">
          Customers
        </a>
      </div>
    );
  }
}

export default Header;
