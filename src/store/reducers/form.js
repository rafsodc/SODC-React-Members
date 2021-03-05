import * as actionTypes from "../actions/actionsTypes";
import {updateObject} from "../utility";

const initialState = {
  login: {
    fields: {
      email: "",
      password: "",
    },
    locked: false,
    hidden: true,
  }
};

const formSave = (state, action) => {
  const fields = updateObject(state[action.form].fields, action.data);
  const form = updateObject(state[action.form], {fields: fields});
  return updateObject(state, {[action.form]: form});
}

const formLock = (state, action) => {
  const form = updateObject(state[action.form], {locked: true});
  return updateObject(state, {[action.form]: form});
}

const formUnlock = (state, action) => {
  const form = updateObject(state[action.form], {locked: false});
  return updateObject(state, {[action.form]: form});
}

const formHide = (state, action) => {
  const form = updateObject(state[action.form], {hidden: true});
  return updateObject(state, {[action.form]: form});
}

const formShow = (state, action) => {
  const form = updateObject(state[action.form], {hidden: false});
  return updateObject(state, {[action.form]: form});
}

const formClear = (state, action) => {
  return updateObject(state, {[action.form]: initialState[action.form]});
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FORM_SAVE: return formSave(state, action);
    case actionTypes.FORM_LOCK: return formLock(state, action);
    case actionTypes.FORM_UNLOCK: return formUnlock(state, action);
    case actionTypes.FORM_HIDE: return formHide(state, action);
    case actionTypes.FORM_SHOW: return formShow(state, action);
    case actionTypes.FORM_CLEAR: return formClear(state, action);
    default:
      return state;
  }
}

export default reducer;