import {combineReducers} from "redux";

import alertReducer from "./alert";
import errorReducer from "./error";
import eventReducer from "./event";
import bookingReducer from "./booking";
import ticketReducer from "./ticket"
import typeAheadReducer from "./typeAhead";
import authenticationReducers from "./authentication/";
import transactionReducer  from "./transaction"
import pageReducer from "./page"
import contactReducer from "./contact"
import basketReducer from "./basket"

const rootReducer = combineReducers({
  ...authenticationReducers,
  alertReducer: alertReducer,
  errorReducer: errorReducer,
  eventReducer: eventReducer,
  bookingReducer: bookingReducer,
  ticketReducer: ticketReducer,
  typeAheadReducer: typeAheadReducer,
  transactionReducer: transactionReducer,
  pageReducer: pageReducer,
  contactReducer: contactReducer,
  basketReducer: basketReducer,
});

export default rootReducer;