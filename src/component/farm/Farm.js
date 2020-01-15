import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import login from "../../reducers/login";
import FarmItem from "./FarmItem";

const Farm = ({ result }) => {
  if (result === null) {
    return <Redirect to="/" />;
  }
  return (
    <div className="farm-container">
      <FarmItem farm={result.farms} />
    </div>
  );
};

const mapStateToProps = state => ({
  result: state.login.data
});

export default connect(mapStateToProps, {})(Farm);
