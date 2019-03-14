import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Week from "./weekly/Week";
import { fetchDay } from "../actions/dateActions";

class App extends Component {
  componentDidMount() {
    this.props.fetchDay();
  }
  render() {
    return (
      <div>
        <Header />
        <div className="box">
          <div className="initial" />
          <div className="calendarBox">
            <Week />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchDay }
)(App);
