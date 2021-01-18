import * as actionTypes from './actions';
import uuid from "react-uuid";

const initialState = {
  page: {
    response: null,
    loading: true,
  },
  error: {
    Page: false
  },
  alerts: [],
  stickyAlerts: []
}

const reducer = (state = initialState, action) => {
  let alerts = null;
  let stickyAlerts = null;
  switch (action.type) {
    case actionTypes.PAGE_LOAD:
      return {
        ...state,
        page: {
          ...state.page,
          response: action.response,
          loading: false,
        },
        error: {
          ...state.error,
          Page: false,
        }
      }
    case actionTypes.PAGE_UNLOAD:
      return {
        ...state,
        page: {
          ...state.page,
          response: null,
          loading: true,
        }
      }
    case actionTypes.ERROR_FLAG:
      return {
        ...state,
        error: {
          ...state.error,
          [action.flag]: action.value
        }
      }
    case actionTypes.ALERT_OPEN:

      // Set key
      const key = uuid();
      const alert = {
        ...action.alert,
        key: key,
      };

      // Update alerts array
      alerts = [...state.alerts];
      alerts.push(alert);

      // Update sticky alerts array
      stickyAlerts = [...state.stickyAlerts];
      if(action.sticky) {
        stickyAlerts.push(key);
      }

      return {
        ...state,
        alerts: alerts,
        stickyAlerts: stickyAlerts
      }
    case actionTypes.ALERT_CLOSE:
      // Update this immutably
      alerts = [...state.alerts];

      const alertId = alerts[action.index].key;
      alerts.splice(action.index, 1);

      stickyAlerts = state.stickyAlerts.filter(el => (el !== alertId));

      return {
        ...state,
        alerts: alerts,
        stickyAlerts: stickyAlerts,
      }
    case actionTypes.ALERT_CLOSE_UNSTICKY:
      /**
       *
       * @param {array} arr
       * @param {array} stickyArr
       * @returns {*}
       */
      const filterSticky = (arr, stickyArr) => {
        return arr.filter(el => (stickyArr.includes(el.key)));
      }

      alerts = filterSticky(state.alerts, state.stickyAlerts);

      return {
        ...state,
        alerts: alerts,
      }
    default:
      return state;
  }

}

export default reducer;