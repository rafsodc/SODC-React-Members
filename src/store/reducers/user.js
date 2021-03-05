import jwtDecode from "jwt-decode";
import {updateObject} from "../utility";
import * as actionTypes from "../actions/actionsTypes";

const initialState = {
  authenticated: false,
  token: null,
  token_data: null,
}

const userAuthenticate = (state, action) => {
  const jwt = jwtDecode(action.token);

  return updateObject(state, {authenticated: true, token: action.token, token_data: jwt});
}

const userLogout = (state, action) => {
  return updateObject(state, initialState);
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_AUTHENTICATE: return userAuthenticate(state, action);
    case actionTypes.USER_LOGOUT: return userLogout(state, action);
    default:
      return state;
  }
}

export default reducer;