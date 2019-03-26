import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Route } from "react-router-dom";
import history from "./history";
import { fetchDay } from "../actions/dateActions";

import Header from "./Header";
import Login from "../components/auth/LogIn";
import Week from "./calendar/weekly/Week";
import Calendar from "./calendar/month";

import ScheduleCreate from "./calendar/schedule/ScheduleCreate";
import ScheduleDetail from "./calendar/schedule/ScheduleDetail";
import ScheduleEdit from "./calendar/schedule/ScheduleEdit";
import ScheduleDelete from "./calendar/schedule/ScheduleDelete";
import CustomerList from "./customers/CustomerList";
import CustomerCreate from "./customers/CustomerCreate";
class App extends Component {
  componentDidMount() {
    this.props.fetchDay();
  }
  render() {
    return (
      <Router history={history}>
        <div>
          <div className="ui grid">
            <div className="sixteen wide column">
              <Route component={Header} path="/index" />
              <Route component={Login} path="/" exact />
            </div>
            <div className="four wide column">
              <Route component={Calendar} path="/index" />
            </div>
            <div className="twelve wide column">
              <Route component={Week} path="/index" exact />
              <Route
                exact
                component={ScheduleCreate}
                path="/index/create/:date/:start"
              />
              <Route
                exact
                component={ScheduleDetail}
                path="/index/detail/:date/:start"
              />
              <Route
                exact
                component={ScheduleEdit}
                path="/index/edit/:date/:start"
              />
              <Route
                exact
                component={ScheduleDelete}
                path="/index/delete/:date/:start"
              />
              <Route component={CustomerList} exact path="/index/customers" />
              <Route
                component={CustomerCreate}
                path="/index/customers/create"
              />
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
