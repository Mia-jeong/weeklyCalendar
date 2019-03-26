import React from "react";
import { Link } from "react-router-dom";

const CustomerList = props => {
  return (
    <div className="formBox">
      <div>
        <table className="ui table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Birth</th>
              <th>Date</th>
              <th>Last visited</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kim</td>
              <td>010-1234-1234</td>
              <td>2000/01/01</td>
              <td>2000/01/01</td>
              <td>2000/01/01</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="2">
                <Link
                  className="ui button primary"
                  to="/index/customers/create"
                >
                  <i className="user plus icon" /> Create
                </Link>
              </th>
              <th colSpan="3">
                <div className="ui right floated pagination menu">
                  <a className="icon item">
                    <i className="left chevron icon" />
                  </a>
                  <a className="item">1</a>
                  <a className="item">2</a>
                  <a className="item">3</a>
                  <a className="item">4</a>
                  <a className="item">5</a>
                  <a className="icon item">
                    <i className="right chevron icon" />
                  </a>
                </div>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default CustomerList;
