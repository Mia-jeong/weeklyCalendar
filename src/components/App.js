import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Route } from "react-router-dom";
import history from "./history";
import { fetchDay } from "../actions/dateActions";

import Header from "./Header";
import Week from "./calendar/weekly/Week";
import Calendar from "./calendar";
import CustomerList from "./customers/CustomerList";
import ScheduleCreate from "./calendar/schedule/ScheduleCreate";
import ScheduleEdit from "./calendar/schedule/ScheduleEdit";
class App extends Component {
  componentDidMount() {
    this.props.fetchDay();
  }
  render() {
    return (
      <Router history={history}>
        <div>
          <Route component={Header} path="/index" />

          <Route component={null} path="/login" />

          <div className="box">
            <div className="initial">
              <Route component={Calendar} exact path="/index" />
            </div>
            <div className="calendarBox">
              <Route component={Week} path="/index" exact />
              <Route
                exact
                component={ScheduleCreate}
                path="/index/create/:date/:start"
              />
              <Route
                exact
                component={ScheduleEdit}
                path="/index/edit/:date/:start"
              />
              <Route component={CustomerList} path="/index/customers" />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default connect(
  null,
  { fetchDay }
)(App);
