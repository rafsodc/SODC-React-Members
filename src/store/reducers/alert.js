import {addElement, updateObject, removeElementByIndex, removeElementByValue} from "../helpers/utility";
import uuid from "react-uuid";
import * as actionTypes from "../actions/actionsTypes";

const initialState = {
  alerts: [],
  stickyAlerts: [],
};

const setAlert = (state, action) => {

  const alerts = addElement(state.alerts, action.alert);

  if(action.sticky) {
    const stickyAlerts = addElement(state.stickyAlerts, action.key);
    return updateObject(state, {alerts: alerts, stickyAlerts: stickyAlerts});
  }
  else {
    return updateObject(state, {alerts: alerts});
  }

}

const clearAlert = (state, action) => {
  const stickyAlerts = removeElementByValue(state.stickyAlerts, state.alerts[action.index].key)
  const alerts = removeElementByIndex(state.alerts, action.index);
  return updateObject(state, {alerts: alerts, stickyAlerts: stickyAlerts});
}

const clearUnstickyAlert = (state) => {
  const filterSticky = (arr, stickyArr) => {
    return arr.filter(el => (stickyArr.includes(el.key)));
  }
  return updateObject(state, {alerts: filterSticky(state.alerts, state.stickyAlerts)});
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ALERT: return setAlert(state, action);
    case actionTypes.CLEAR_ALERT: return clearAlert(state, action);
    case actionTypes.CLEAR_UNSTICKY_ALERTS: return clearUnstickyAlert(state);
    default:
      return state;
  }
}

export default reducer;