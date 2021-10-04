import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Countdown from "./components/utils/Countdown";

function App() {
  return (
    <div className="App">
      <Navbar />
      Welcome to the Holy Frijole Chili Cook Off!
      <Countdown />
    </div>
  );
}

export default App;
