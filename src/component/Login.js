import React, { Fragment, useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Alert from "./Alert";

import { login, load } from "../action/login.js";

const Login = ({ login, result, load }) => {
  useEffect(() => {
    load();
  }, [load]);

  //Usamos el hook useState para tomar los datos del formulario y agragarlo en el state de la app.
  const [formData, setFormData] = useState({
    userName: "",
    token: ""
  });

  if (result.data != null && !result.loading) {
    return <Redirect to="/dashboard" />;
  }

  // Este methodo es para ver si el usuarion esta escribiendo en los campos del formulario.
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { token, userName } = formData;

  // Hacemos la llamada al metodo login que tenemos en el action via redux
  const onSubmit = e => {
    e.preventDefault();
    login(userName, token);
  };

  return (
    <Fragment>
      <div>
        <Alert />
        <div className="container">
          <div className="frame">
            <div className="nav">
              <ul className="links">
                <li className="signin-active">
                  <a className="btn">Sign in</a>
                </li>
              </ul>
            </div>
            <div>
              <form className="form-signin" onSubmit={onSubmit}>
                <label htmlFor="username">Username</label>
                <input
                  className="form-styling"
                  type="text"
                  name="userName"
                  placeholder="User Name"
                  onChange={e => {
                    onChange(e);
                  }}
                />
                <label htmlFor="password">Token</label>
                <input
                  className="form-styling"
                  type="text"
                  name="token"
                  placeholder="Token"
                  onChange={e => {
                    onChange(e);
                  }}
                />

                <input
                  type="submit"
                  className="btn-animate"
                  value={`Login ${result.loading ? "..." : ""}`}
                />
              </form>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Login.propTypes = {};

const mapStateToProps = state => ({
  result: state.login
});

export default connect(mapStateToProps, { load, login })(Login);
