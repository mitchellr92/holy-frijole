import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Carousel from "./components/layout/Carousel";
// import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import AuthState from "./context/auth/AuthState";
import "./App.css";

function App() {
  return (
    <AuthState>
      <Router>
        <Fragment>
          <Navbar />
          <div className="">
            <Switch>
              <Route exact path="/" component={Carousel} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </AuthState>
  );
}

export default App;
