import {combineReducers} from "redux";

import alertReducer from "./alert";
import errorReducer from "./error";
import eventReducer from "./event";
import bookingReducer from "./booking";
import ticketReducer from "./ticket"
import typeAheadReducer from "./typeAhead";
import authenticationReducer from "./authentication";
import transactionReducer  from "./transaction"

const rootReducer = combineReducers({
  alertReducer: alertReducer,
  errorReducer: errorReducer,
  eventReducer: eventReducer,
  bookingReducer: bookingReducer,
  ticketReducer: ticketReducer,
  typeAheadReducer: typeAheadReducer,
  authenticationReducer: authenticationReducer,
  transactionReducer: transactionReducer,
});

//export {alertReducer, errorReducer, formsReducer, userReducer}
export default rootReducer;