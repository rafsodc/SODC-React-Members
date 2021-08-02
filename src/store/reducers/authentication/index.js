import {combineReducers} from "redux";

import authenticationReducer from "./authentication";
import loginFormReducer from "./loginForm";
import passwordResetRequestFormReducer from "./passwordResetRequestForm";
import passwordResetSubmitFormReducer from "./passwordResetSubmitForm";
import passwordResetSubmitReducer from "./passwordResetSubmit";

const reducers = {
  authenticationReducer: authenticationReducer,
  loginFormReducer: loginFormReducer,
  passwordResetRequestFormReducer: passwordResetRequestFormReducer,
  passwordResetSubmitFormReducer: passwordResetSubmitFormReducer,
  passwordResetSubmitReducer: passwordResetSubmitReducer
};

export default reducers;