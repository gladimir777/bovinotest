import React, { Fragment } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const AnimalDetail = ({ history, result, match }) => {
  if (result === null) {
    return <Redirect to="/" />;
  }
  const farm = result.farms[0];
  const animals = farm.animals[parseInt(match.params.id)];
  return (
    <Fragment>
      <div className="animal-detail-container">
        <h3>Animal Detail</h3>
        <nav>
          <ul className="list-group">
            <li className="list-group-item">
              <span>Farm Name</span>:{farm.farmName}
            </li>
          </ul>
          <ul className="list-group">
            <li className="list-group-item">
              <span>DIIO</span>:{animals.diio}
            </li>
            <li className="list-group-item">
              <span>Birth Date</span>:{animals.birthDate}
            </li>
            <li className="list-group-item">
              <span>Race</span>:{animals.race}
            </li>
            <li className="list-group-item">
              <span>Sex</span>:{animals.sex}
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  result: state.login.data
});

export default connect(mapStateToProps, {})(withRouter(AnimalDetail));
