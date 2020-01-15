import axios from "axios";
import { LOGIN_SUCCES, LOGIN_FAIL, LOAD_DATA, LOGIN_LOADING } from "./type";

//Loading data user
export const load = () => dispatch => {
  dispatch({ type: LOAD_DATA });
};

//Login user
export const login = (userName, token) => async dispatch => {
  dispatch({
    type: LOGIN_LOADING
  });

  try {
    const res = await axios.get("http://ganaderos.cl/sipec/animals", {
      params: {
        username: userName,
        token: token
      }
    });

    dispatch({ type: LOGIN_SUCCES, payload: res.data });
  } catch (error) {
    if (error) {
      console.log(error);
    }

    dispatch({
      type: LOGIN_FAIL,
      payload: error
    });
  }
};
