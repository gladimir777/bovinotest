import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

import Login from "./component/Login";
import Dashboard from "./component/dashboard/Dashboard";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { load } from "./action/login";

import "./App.css";
library.add(faCheckSquare, faCoffee);
const App = ({ result }) => {
  useEffect(() => {
    store.dispatch(load());
  }, []);
  if (result != null && result.loading) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
