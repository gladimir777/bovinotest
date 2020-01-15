import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

const Header = ({ result }) => {
  return (
    <Fragment>
      {result && (
        <div className="header-container">
          <div className="header">
            <nav className="nav-container">
              <ul>
                <li className="user-list">
                  <FontAwesomeIcon icon={faBell} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faUserCircle} size="2x" />
                </li>
                <li className="user-list">
                  {result ? result.sipecProcessInfo.username : ""}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </Fragment>
  );
};
const mapStateToProps = state => ({
  result: state.login.data
});
export default connect(mapStateToProps, {})(Header);
