import {combineReducers} from "redux";

import alertReducer from "./alert";
import errorReducer from "./error";
import eventReducer from "./event";
import bookingReducer from "./booking";
import ticketReducer from "./ticket"
import typeAheadReducer from "./typeAhead";
import authenticationReducer from "./authentication";
import transactionReducer  from "./transaction"
import pageReducer from "./page"
import contactReducer from "./contact"

const rootReducer = combineReducers({
  alertReducer: alertReducer,
  errorReducer: errorReducer,
  eventReducer: eventReducer,
  bookingReducer: bookingReducer,
  ticketReducer: ticketReducer,
  typeAheadReducer: typeAheadReducer,
  authenticationReducer: authenticationReducer,
  transactionReducer: transactionReducer,
  pageReducer: pageReducer,
  contactReducer: contactReducer
});

export default rootReducer;