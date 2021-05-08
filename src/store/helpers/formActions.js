import actionTypes from "../actionTypes"
import uuid from "react-uuid";
import apiPaths from "../paths";
import axios from "../../services/axios/axios";

export const addForm = (formName, fields=null) => {
  const id = uuid();
  const location = (fields !== null) ? fields['@id'] : null;
  const saved = (fields !== null) ? true: false;
  return {
    type: actionTypes[formName].ADD,
    id: id,
    fields: fields,
    location: location,
    saved: saved
  }
}

export const setFormField = (formName, data, id = null) => ({
  type: actionTypes[formName].SET_FIELD,
  data: data,
  id: id
});

export const setFormLocked = (formName, locked, id = null) => ({
  type: actionTypes[formName].SET_LOCKED,
  param: 'locked',
  data: locked,
  id: id
});

export const setFormHidden = (formName, hidden, id = null) => ({
  type: actionTypes[formName].SET_HIDDEN,
  param: 'hidden',
  data: hidden,
  id: id
});

const setFormSaved = (formName, saved, id = null) => ({
  type: actionTypes[formName].SET_SAVED,
  param: 'saved',
  data: saved,
  id: id
})

export const clearForm = (formName) => {
  return {
    type: actionTypes[formName].CLEAR,
  }
}


export const submitForm = (formName, data, id = null, location = null) => dispatch => {
  dispatch(setFormLocked(formName, true, id));
  const apiPath = (location === null) ? apiPaths[formName].POST : location;
  const apiMethod = (location === null) ? 'post':'put';

  axios[apiMethod](apiPath, JSON.stringify(data))
  .then((response) => dispatch(setFormSaved(formName, true, id)))
  .catch(() => {})
  .finally(() => dispatch(setFormLocked(formName, false, id)));
}
