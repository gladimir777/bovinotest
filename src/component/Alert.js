import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";

const Alert = ({ result }) => {
  const [close, setClose] = useState(false);
  const closeAlert = () => setClose(true);

  return (
    <Fragment>
      {result != null && close == false ? (
        <div
          className={`jam ${result != null ? "on" : " "}`}
          aria-hidden="true"
        >
          <span
            className="close"
            aria-role="button"
            tabindex="0"
            onClick={closeAlert}
          >
            &times;
          </span>
          Something went wrong.
        </div>
      ) : null}
    </Fragment>
  );
};

const mapStateToProps = state => ({ result: state.login.err });

export default connect(mapStateToProps, {})(Alert);
