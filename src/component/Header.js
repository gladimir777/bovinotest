import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
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
            <li className="user-list">Jacobsen</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
