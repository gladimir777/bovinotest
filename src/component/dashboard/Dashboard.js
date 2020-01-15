import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Nav from "./nav/Nav";
import Header from "../Header";

const Dashboard = ({ result }) => {
  if (result.data === null) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <h1 className="title">Dashboard</h1>
    </div>
  );
};
const mapStateToProps = state => ({
  result: state.login
});
export default connect(mapStateToProps, {})(Dashboard);
