import * as actionTypes from "./actionsTypes";


export const formSave = (formName, data) => {
  return {
    type: actionTypes.FORM_SAVE,
    form: formName,
    data: data
  }
}

export const formLock = (formName) => {
  return {
    type: actionTypes.FORM_LOCK,
    form: formName
  }
}

export const formUnlock = (formName) => {
  return {
    type: actionTypes.FORM_UNLOCK,
    form: formName
  }
}

export const formHide = (formName) => {
  return {
    type: actionTypes.FORM_HIDE,
    form: formName
  }
}

export const formShow = (formName) => {
  return {
    type: actionTypes.FORM_SHOW,
    form: formName
  }
}

export const formClear = (formName) => {
  return {
    type: actionTypes.FORM_CLEAR,
    form: formName
  }
}

