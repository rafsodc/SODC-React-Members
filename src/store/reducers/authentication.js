import actionTypes from "../actionTypes"
import {formReducerObject} from "../helpers/formReducers";
import {combineReducers} from "redux";
import {createReducer, updateObject, setParam} from "../helpers/utility";
import jwtDecode from "jwt-decode";

const initialAuthState = {
  authenticated: false,
  token: null,
  token_data: null,
  user: null
}

const authenticate = (state, action) => {
  const jwt = jwtDecode(action.token);
  return updateObject(state, {authenticated: true, token: action.token, token_data: jwt});
}

const logout = (state, action) => {
  return initialAuthState;
}

const setUser = (state, action) => setParam(state, updateObject(action, {param: 'user'}));

const authReducer = createReducer(initialAuthState, {
  [actionTypes.authentication.AUTHENTICATE]: authenticate,
  [actionTypes.authentication.SET_USER]: setUser,
  [actionTypes.authentication.LOGOUT]: logout,
});


const initialLoginFormState = {
  fields: {
    email: "",
    password: "",
  },
  locked: false,
  hidden: true
}

const initialPasswordResetRequestFormState = {
  fields: {
    email: "",
  },
  locked: false,
  hidden: true
}

const initialPasswordResetSubmitFormState = {
  fields: {
    password: "",
    password2: "",
  },
  locked: false,
  hidden: true
}



const loginFormReducer = createReducer(initialLoginFormState, formReducerObject('authentication'));

const passwordResetRequestFormReducer = createReducer(initialPasswordResetRequestFormState, formReducerObject('authentication'));

const passwordResetSubmitFormReducer = createReducer(initialPasswordResetSubmitFormState, formReducerObject('authentication'));

const reducer = combineReducers({
  auth: authReducer,
  loginForm: loginFormReducer,
  passwordResetRequestForm: passwordResetRequestFormReducer,
  passwordResetSubmitForm: passwordResetSubmitFormReducer,
});

export default reducer