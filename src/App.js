import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Recipes from "./components/recipes/Recipes";
import RecipeForm from "./components/recipes/RecipeForm";

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
              <Route exact path="/" component={Landing} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/recipes" component={Recipes} />
              <Route exact path="/add-recipe" component={RecipeForm} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </AuthState>
  );
}

export default App;
