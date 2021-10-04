import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Countdown from "./components/utils/Countdown";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Countdown />
    </div>
  );
}

export default App;
