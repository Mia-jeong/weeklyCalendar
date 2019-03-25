import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <div className="ui menu">
        <Link to="/index" className="header item">
          Weekly
        </Link>
        <Link to="/index/customers" className="item">
          Customers
        </Link>
        <Link to="/" className="ui right floated item">
          <i className="power off icon" />
        </Link>
      </div>
    );
  }
}

export default Header;
