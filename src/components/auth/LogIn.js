import React from "react";
import { Link } from "react-router-dom";
const Login = props => {
  return (
    <div className="ui placeholder segment">
      <div className="ui one column very relaxed stackable grid">
        <div className="column">
          <div className="ui form">
            <div className="field">
              <label>Username</label>
              <div className="ui left icon input">
                <input type="text" placeholder="Username" />
                <i className="user icon" />
              </div>
            </div>
            <div className="field">
              <label>Password</label>
              <div className="ui left icon input">
                <input type="password" />
                <i className="lock icon" />
              </div>
            </div>
            <Link className="ui blue submit button" to="/index">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
