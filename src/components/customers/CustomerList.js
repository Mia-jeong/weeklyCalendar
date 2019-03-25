import React from "react";

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
        </table>
      </div>
    </div>
  );
};

export default CustomerList;
