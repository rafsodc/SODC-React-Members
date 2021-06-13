import actionTypes from "../actionTypes"
import * as formReducers from "../helpers/formReducers";
import {combineReducers} from "redux";
import {createReducer, updateObject, setParam} from "../helpers/utility";
import jwtDecode from "jwt-decode";

const initialAuthState = {
  authenticated: false,
  token: null,
  token_data: null,
  user: null
}

const initialFormState = {
  fields: {
    email: "",
    password: "",
  },
  locked: false,
  hidden: true
}

const authenticate = (state, action) => {
  const jwt = jwtDecode(action.token);
  return updateObject(state, {authenticated: true, token: action.token, token_data: jwt});
}

const logout = (state, action) => {
  return updateObject(state, initialAuthState);
}

const authReducer = createReducer(initialAuthState, {
  [actionTypes.authentication.AUTHENTICATE]: authenticate,
  [actionTypes.authentication.SET_USER]: {fn: setParam, args: ['user']},
  [actionTypes.authentication.LOGOUT]: logout,
});

const formReducer = createReducer(initialFormState, {
  [actionTypes.authentication.SET_FIELD]: formReducers.setField,
  [actionTypes.authentication.SET_LOCKED]: {fn: setParam, args: ['locked']},
  [actionTypes.authentication.SET_HIDDEN]: {fn: setParam, args: ['hidden']},
  [actionTypes.authentication.CLEAR]: formReducers.clearForm
});

// const formReducer = (state = initialFormState, action) => {
//   switch (action.type) {
//     case actionTypes.authentication.SET_FIELD: return formReducers.setField(state, action);
//     case actionTypes.authentication.SET_LOCKED: return formReducers.setParam(state, action, 'locked');
//     case actionTypes.authentication.SET_HIDDEN: return formReducers.setParam(state, action, 'hidden');
//     case actionTypes.authentication.CLEAR: return formReducers.clearForm(state, action);
//     default:
//       return state;
//   }
// }


const reducer = combineReducers({
  form: formReducer,
  auth: authReducer
});

export default reducer