import * as actionTypes from "../actions/actionsTypes";
import {addElement, replaceElementByIndex, updateObject} from "../utility";

// const isFormArray = {
//   login: false,
//   ticket: true,
// }

const initialArrayStates = {
  ticket: {
    fields: {
      email: "",
      rank: "",
      firstName: "",
      lastName: ""
    },
    locked: false,
    hidden: true,
    formKey: null,
  },
}

const initialState = {
  login: {
    fields: {
      email: "",
      password: "",
    },
    locked: false,
    hidden: true,
    array: false,
  },
  ticket: [],
};

const formSave = (state, action) => {
    const fields = updateObject(state[action.form].fields, action.data);
    const form = updateObject(state[action.form], {fields: fields});
  return updateObject(state, {[action.form]: form});
}

const saveMultiForm = (state, action) => {
    const index = state[action.form].findIndex(el => el.formKey === action.key);
    const fields = updateObject(state[action.form][index].fields, action.data);
    const el = updateObject(state[action.form][index], {fields: fields});
    const form = replaceElementByIndex(state[action.form], index, el);

  return updateObject(state, {[action.form]: form});
}

const addArrayForm = (state, action) => {
  // Use initial state and set key
  const el = updateObject(initialArrayStates[action.form], {formKey: action.key});
  // Add to existing array
  const form = addElement(state[action.form], el)
  // Update state
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
    case actionTypes.ADD_ARRAY_FORM: return addArrayForm(state, action);
    case actionTypes.SAVE_MULTI_FORM: return saveMultiForm(state, action);
    default:
      return state;
  }
}

export default reducer;