import * as actionTypes from './actions';
import uuid from "react-uuid";

const initialState = {
  page: {
    response: null,
    loading: true,
  },
  error: {
    Page: false,
    captcha: false,
  },
  alerts: [],
  stickyAlerts: [],
  forms: {
    login: {
      fields: {
        username: "",
        password: "",
      },
      locked: false,
      hidden: false,
    }
  },
  user: {
    authenticated: false
  }
}

const reducer = (state = initialState, action) => {
  let alerts = null;
  let stickyAlerts = null;
  switch (action.type) {
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
      if (action.sticky) {
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
    case actionTypes.FORM_SAVE:
      return {
        ...state,
        forms: {
          ...state.forms,
          [action.form]: {
            ...state.forms[action.form],
            fields: {
              ...state.forms[action.form].fields,
              ...action.data,
            }
          },
        },
      }
    case actionTypes.FORM_LOCK:
      return {
        ...state,
        forms: {
          ...state.forms,
          [action.form]: {
            ...state.forms[action.form],
            locked: true
          }
        }
      }
    case actionTypes.FORM_HIDE:
      return {
        ...state,
        forms: {
          ...state.forms,
          [action.form]: {
            ...state.forms[action.form],
            hidden: true
          }
        }
      }
    default:
      return state;
  }

}

export default reducer;