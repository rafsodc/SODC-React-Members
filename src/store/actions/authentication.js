import {setFormField, setFormLocked, clearForm, setFormHidden} from "../helpers/formActions";
import actionTypes from "../actionTypes";
import axios from "../../services/axios/axios";
import apiPaths from "../paths";
import {setAlert} from "./alert";
import {ALERT_DANGER, ALERT_SUCCESS} from "../../ReactUI/AlertWindow/alertTypes";

export const setLoginField = (data) => setFormField(actionTypes.loginForm.NAME, data);
export const setLoginLock = (isLocked) => setFormLocked(actionTypes.loginForm.NAME, isLocked);
export const setLoginHidden = (isHidden) => setFormHidden(actionTypes.loginForm.NAME, isHidden);
const clearLogin = () => clearForm(actionTypes.loginForm.NAME);

export const login = (data) => dispatch => {
  dispatch(setLoginLock(true));
  axios.post(apiPaths.authentication.LOGIN, JSON.stringify(data))
  .then((response) => {
    dispatch(doLogin(response.data.token));
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

export const doLogin = (token) => ([
  authenticate(token),
  checkTokenTimeout(3600)
]);

export const logout = () => dispatch => {
  axios.post(apiPaths.authentication.LOGOUT).then(dispatch(doLogout()));
}

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

  //This should be post!
  axios.get(apiPaths.authentication.REFRESH_TOKEN).then((response) => dispatch(doLogin(response.data.token)))
  .catch((error) => {
    switch(error.response.status) {
      case 401:
        dispatch(doLogout());
        dispatch(setLoginHidden(false));
        break;
      default:
    }
  });
}

export const doLogout = () => {
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


//////

export const setPasswordResetRequestField = (data) => setFormField(actionTypes.passwordResetRequestForm.NAME, data);
export const setPasswordResetRequestLocked = (isLocked) => setFormLocked(actionTypes.passwordResetRequestForm.NAME, isLocked);
export const setPasswordResetRequestHidden = (isHidden) => setFormHidden(actionTypes.passwordResetRequestForm.NAME, isHidden);
const clearPasswordResetRequest = () => clearForm(actionTypes.passwordResetRequestForm.NAME);

export const passwordResetRequest = (data) => dispatch => {
  dispatch(setPasswordResetRequestLocked(true));
  axios.post(apiPaths.authentication.FORGOT_PASSWORD, JSON.stringify(data))
  .then((response) => {
    dispatch(setAlert("A password reset link has been sent to your email address.", "", ALERT_SUCCESS));
    dispatch(clearPasswordResetRequest());
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
    dispatch(setPasswordResetRequestLocked(false));
  })
}