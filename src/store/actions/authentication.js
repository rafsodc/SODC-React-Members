import {setFormField, setFormLocked, clearForm, setFormHidden} from "../helpers/formActions";
import actionTypes from "../actionTypes";
import axios from "../../services/axios/axios";
import apiPaths from "../paths";
import {setAlert} from "./alert";
import {ALERT_DANGER} from "../../ReactUI/AlertWindow/alertTypes";

export const setLoginField = (data) => setFormField(actionTypes.authentication.NAME, data);
export const setLoginLock = (isLocked) => setFormLocked(actionTypes.authentication.NAME, isLocked);
export const setLoginHidden = (isHidden) => setFormHidden(actionTypes.authentication.NAME, isHidden);
const clearLogin = () => clearForm(actionTypes.authentication.NAME);

export const loginSubmit = (data) => dispatch => {
  dispatch(setLoginLock(true));
  axios.post(apiPaths.authentication.LOGIN, JSON.stringify(data))
  .then((response) => {
    dispatch(login(response.data.token));
    dispatch(clearLogin());
  })
  .catch((error) => {
    switch (error.response.status) {
      case 401:
        dispatch(setAlert("An error has occurred", error.response.data.message, ALERT_DANGER));
        break;
      default:
    }
  })
  .finally(() => {
    dispatch(setLoginLock(false));
  })
}

export const login = (token) => ([
  authenticate(token),
  checkTokenTimeout(3600)
]);

// export const login = (token) => {
//   return dispatch => {
//     dispatch(authenticate(token));
//     dispatch(checkTokenTimeout(3600));
//   }
//}

const authenticate = (token) => {
  return {
    type: actionTypes.authentication.AUTHENTICATE,
    token: token
  }
}

const checkTokenTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(refreshToken());
      //dispatch(formShow());
    }, expirationTime * 1000);
  };
};

export const refreshToken = () => dispatch => {
  axios.get(apiPaths.authentication.REFRESH_TOKEN).then((response) => dispatch(login(response.data.token)))
  .catch((error) => {
    switch(error.response.status) {
      case 401:
        dispatch(logout());
        dispatch(setLoginHidden(true));
        break;
      default:
    }
  });
}

export const logout = () => {
  return {
    type: actionTypes.authentication.LOGOUT
  };
}

export const loadUser = (iri) => dispatch => {
  axios.get(iri).then((response) => dispatch(setUser(response.data)));
}

export const setUser = (user) => ({
  type: actionTypes.authentication.SET_USER,
  payload: user
});