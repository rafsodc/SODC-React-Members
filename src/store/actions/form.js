import * as actionTypes from "./actionsTypes";
import {clearUnstickyAlerts, setAlert} from "./alert";
import axios from "../../services/axios/axios";
import {errorFlag} from "./error";
import {ALERT_DANGER} from "../../ReactUI/AlertWindow/alertTypes";
import {LOGIN} from "../../services/axios/paths";
import {userLogin} from "./user";

export const formSave = (formName, data) => {
  return {
    type: actionTypes.FORM_SAVE,
    form: formName,
    data: data
  }
}

export const saveMultiForm = (formName, data, key) => {
  return {
    type: actionTypes.SAVE_MULTI_FORM,
    form: formName,
    data: data,
    key: key
  }
}

export const addArrayForm = (formName, key) => {
  return {
    type: actionTypes.ADD_ARRAY_FORM,
    form: formName,
    key: key
  }
}

export const formLock = (formName) => {
  return {
    type: actionTypes.FORM_LOCK,
    form: formName
  }
}

export const formUnlock = (formName) => {
  return {
    type: actionTypes.FORM_UNLOCK,
    form: formName
  }
}

export const formHide = (formName) => {
  return {
    type: actionTypes.FORM_HIDE,
    form: formName
  }
}

export const formShow = (formName) => {
  return {
    type: actionTypes.FORM_SHOW,
    form: formName
  }
}

export const formClear = (formName) => {
  return {
    type: actionTypes.FORM_CLEAR,
    form: formName
  }
}

export const formSubmit = (formName, apiUrl, data) => dispatch => {
  dispatch(clearUnstickyAlerts());
  dispatch(formLock(formName));
  axios.post(apiUrl, JSON.stringify(data))
  .then(() => {
    // If we get a valid response
    dispatch(setAlert("Form Submitted", "Form successfully submitted."));
    dispatch(formHide(formName));
  })
  .catch(() => {})
  .finally(() => {
    dispatch(formUnlock(formName));
  })
}

export const formSubmitCaptcha = (formName, apiUrl, data) => dispatch => {
  if (data.captcha === null) {
    dispatch(errorFlag('captcha', true))
    dispatch(setAlert("Unable to submit form", "Please complete the reCAPTCHA verification process.", ALERT_DANGER));
  } else {
    dispatch(formSubmit(formName, apiUrl, data));
  }
}

export const formLoginSubmit = (formName, apiUrl, data) => dispatch => {
  dispatch(clearUnstickyAlerts());
  dispatch(formLock(formName));
  axios.post(apiUrl, JSON.stringify(data))
  .then((response) => {
    dispatch(userLogin(response.data.token));
    dispatch(formClear(formName));
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
    dispatch(formUnlock(formName));
  })
}
