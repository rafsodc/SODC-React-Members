import * as actionTypes from "./actionsTypes";
import {ALERT_SUCCESS} from "../../ReactUI/AlertWindow/alertTypes";

export const alertOpen = (heading, message, type = ALERT_SUCCESS, sticky = false, dismissible = false ) => {
  return {
    type: actionTypes.ALERT_OPEN,
    alert: {
      variant: type,
      dismissible: dismissible,
      heading: heading,
      message: message
    },
    sticky: sticky,
  }
}

export const alertClose = (index) => {
  return {
    type: actionTypes.ALERT_CLOSE,
    index: index
  }
}

export const alertCloseUnsticky = () => {
  return {
    type: actionTypes.ALERT_CLOSE_UNSTICKY
  }
}

