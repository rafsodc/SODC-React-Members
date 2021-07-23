import {combineReducers} from "redux";

import authenticationReducer from "./authentication";
import loginFormReducer from "./loginForm";
import passwordResetRequestFormReducer from "./passwordResetRequestForm";

const reducers = {
  authenticationReducer: authenticationReducer,
  loginFormReducer: loginFormReducer,
  passwordResetRequestFormReducer: passwordResetRequestFormReducer
};

export default reducers;