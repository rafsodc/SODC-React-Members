import * as actionTypes from "./actionsTypes";
import { formShow } from "./form";
import axios from './../../services/axios/axios';
import {REFRESH_TOKEN} from "../../services/axios/paths";

export const userAuthenticate = (token) => {
  return {
    type: actionTypes.USER_AUTHENTICATE,
    token: token
  }
}

export const userLogin = (token) => {
  return dispatch => {
    dispatch(userAuthenticate(token));
    dispatch(userCheckTokenTimeout(3600));
  }
}

export const userCheckTokenTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(userRefreshToken());
      //dispatch(formShow());
    }, expirationTime * 1000);
  };
};

export const userRefreshToken = () => dispatch => {
  axios.get(REFRESH_TOKEN).then((response) => dispatch(userLogin(response.data.token)))
  .catch((error) => {
    switch(error.response.status) {
      case 401:
        dispatch(userLogout());
        dispatch(formShow('login'));
        break;
      default:
    }
  });
}

export const userLogout = () => {
  return {
    type: actionTypes.USER_LOGOUT
  };
}