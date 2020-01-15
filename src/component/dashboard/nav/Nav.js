import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTractor } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
const Nav = ({ result }) => {
  return (
    <Fragment>
      {result.data && (
        <div className="main-nav-continer">
          <div className="nav-item">
            <h3 className="title">Bovino Test</h3>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/animals">
                  <li className="tractor-icon">
                    <FontAwesomeIcon icon={faTractor} />
                    <span>Animals</span>
                  </li>
                </Link>
              </li>
              <li>
                <Link to="/farm">
                  <li className="tractor-icon">
                    <FontAwesomeIcon icon={faTractor} />
                    <span>Farm</span>
                  </li>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  result: state.login
});

export default connect(mapStateToProps, {})(Nav);
