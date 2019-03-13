import React from "react";
import Header from "./Header";
import Week from "./weekly/Week";

const App = () => {
  return (
    <div>
      <Header />
      <div className="ui container">
        <Week />
      </div>
    </div>
  );
};

export default App;
