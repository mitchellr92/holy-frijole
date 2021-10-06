import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Countdown from "./components/utils/Countdown";
import SignIn from "./components/auth/SignIn";
import Register from "./components/auth/Register";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Countdown />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
