import {combineReducers} from "redux";

import alertReducer from "./alert";
import errorReducer from "./error";
import formsReducer from "./form";
import userReducer from "./user";
import eventReducer from "./event";

const rootReducer = combineReducers({
  alertReducer: alertReducer,
  errorReducer: errorReducer,
  formsReducer: formsReducer,
  userReducer: userReducer,
  eventReducer: eventReducer
});

//export {alertReducer, errorReducer, formsReducer, userReducer}
export default rootReducer;