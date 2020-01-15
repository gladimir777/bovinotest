import React, { Fragment, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

import Login from "./component/Login";
import Dashboard from "./component/dashboard/Dashboard";
import Nav from "./component/dashboard/nav/Nav";
import Header from "./component/Header";
import Animal from "./component/animal/Animal";
import Farm from "./component/farm/Farm";
import AnimalDetail from "./component/animal/AnimalDetail";
import Alet from "./component/Alert";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { load } from "./action/login";

import "./App.scss";
library.add(faCheckSquare, faCoffee);
const App = ({ result }) => {
  useEffect(() => {
    store.dispatch(load());
  }, [result]);
  if (result != null && result.loading) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Header />
          <Nav />
          <Route exact path="/" component={Login} />
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/animals" component={Animal} />
            <Route exact path="/farm" component={Farm} />
            <Route exact path="/animaldetail/:id" component={AnimalDetail} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
