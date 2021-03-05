import {addElement, updateObject, removeElementByIndex, removeElementByValue} from "../utility";
import uuid from "react-uuid";
import * as actionTypes from "../actions/actionsTypes";

const initialState = {
  alerts: [],
  stickyAlerts: [],
};

const alertOpen = (state, action) => {
  // Set key and add it to alert data
  const key = uuid();
  const alert = updateObject(action.alert, {key: key});

  const alerts = addElement(state.alerts, alert);

  if(action.sticky) {
    const stickyAlerts = addElement(state.stickyAlerts, key);
    return updateObject(state, {alerts: alerts, stickyAlerts: stickyAlerts});
  }
  else {
    return updateObject(state, {alerts: alerts});
  }

}

const alertClose = (state, action) => {
  const stickyAlerts = removeElementByValue(state.stickyAlerts, state.alerts[action.index].key)
  const alerts = removeElementByIndex(state.alerts, action.index);
  return updateObject(state, {alerts: alerts, stickyAlerts: stickyAlerts});
}

const alertCloseUnsticky = (state) => {
  const filterSticky = (arr, stickyArr) => {
    return arr.filter(el => (stickyArr.includes(el.key)));
  }
  return updateObject(state, {alerts: filterSticky(state.alerts, state.stickyAlerts)});
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ALERT_OPEN: return alertOpen(state, action);
    case actionTypes.ALERT_CLOSE: return alertClose(state, action);
    case actionTypes.ALERT_CLOSE_UNSTICKY: return alertCloseUnsticky(state);
    default:
      return state;
  }
}

export default reducer;