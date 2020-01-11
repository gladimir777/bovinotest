import {
  LOGIN_SUCCES,
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOAD_DATA
} from "../action/type";

const initialState = {
  loading: false,
  user: null,
  err: null,
  data: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true
      };

    case LOAD_DATA:
      return {
        ...state
      };
    case LOGIN_SUCCES:
      return {
        ...state,
        loading: false,
        data: payload
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        err: payload
      };

    default:
      return state;
  }
}
