import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Countdown from "./components/utils/Countdown";

function App() {
  return (
    <div className="App">
      <Navigation />
      Welcome to the Holy Frijole Chili Cook Off!
      <Countdown />
    </div>
  );
}

export default App;
