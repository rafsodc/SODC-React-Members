import actionTypes from "../actionTypes"
import {createReducer, updateObject, setParam} from "../helpers/utility";
import * as formReducers from "../helpers/formReducers";

const initialState = {
  fields: {
      name: "",
      email: "",
      subject: "",
      message: "",
      captcha: null
    },
    locked: false,
    hidden: false,
}

const setLocked = (state, action) => setParam(state, updateObject(action, {param: 'locked'}));
const setHidden = (state, action) => setParam(state, updateObject(action, {param: 'hidden'}));

const reducer = createReducer(initialState, {
  [actionTypes.contact.SET_FIELD]: formReducers.setField,
  [actionTypes.contact.SET_LOCKED]: setLocked,
  [actionTypes.contact.SET_HIDDEN]: setHidden,
});

export default reducer;



