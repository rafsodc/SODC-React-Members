import * as actionTypes from "./actionsTypes";
import {ALERT_SUCCESS} from "../../ReactUI/AlertWindow/alertTypes";
import uuid from "react-uuid";

export const setAlert = (heading, message, type = ALERT_SUCCESS, sticky = false, dismissible = false ) => {
  const key = uuid();
  return {
    type: actionTypes.SET_ALERT,
    alert: {
      variant: type,
      dismissible: dismissible,
      heading: heading,
      message: message,
      key: key,
    },
    sticky: sticky,
  }
}

export const clearAlert = (index) => {
  return {
    type: actionTypes.CLEAR_ALERT,
    index: index
  }
}

export const clearUnstickyAlerts = () => {
  return {
    type: actionTypes.CLEAR_UNSTICKY_ALERTS
  }
}

