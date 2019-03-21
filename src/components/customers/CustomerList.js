import React from "react";

const CustomerList = props => {
  return (
    <div>
      <div>
        <table className="ui calendarTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Birth</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kim</td>
              <td>010-1234-1234</td>
              <td>2000/01/01</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerList;
