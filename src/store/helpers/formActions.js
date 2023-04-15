import actionTypes from '../actionTypes'
import { v4 } from 'uuid'
import apiPaths from '../paths'
import axios from '../../services/axios/axios'
import { setAlert } from '../actions/alert'
import { ALERT_DANGER } from '../../ReactUI/AlertWindow/alertTypes'

export const addForm = (formName, fields = null) => {
  const id = v4()
  const location = (fields !== null) ? fields['@id'] : null
  const saved = (fields !== null) ? true : false
  return {
    type: actionTypes[formName].ADD,
    id: id,
    fields: fields,
    location: location,
    saved: saved
  }
}

export const removeForm = (formName, id) => ({
  type: actionTypes[formName].REMOVE,
  id: id
})

export const setFormField = (formName, data, id = null) => ({
  type: actionTypes[formName].SET_FIELD,
  data: data,
  id: id
})

export const setFormLocked = (formName, locked, id = null) => ({
  type: actionTypes[formName].SET_LOCKED,
  param: 'locked',
  data: locked,
  id: id
})

export const setFormHidden = (formName, hidden, id = null) => ({
  type: actionTypes[formName].SET_HIDDEN,
  param: 'hidden',
  data: hidden,
  id: id
})

const setFormSaved = (formName, saved, id = null) => ({
  type: actionTypes[formName].SET_SAVED,
  param: 'saved',
  data: saved,
  id: id
})

const setFormLocation = (formName, location, id = null) => ({
  type: actionTypes[formName].SET_LOCATION,
  param: 'location',
  data: location,
  id: id
})

export const setFormIsLoaded = (formName, isLoaded, id = null) => ({
  type: actionTypes[formName].SET_IS_LOADED,
  data: isLoaded,
  id: id
})

export const clearForm = (formName) => {
  return {
    type: actionTypes[formName].CLEAR,
  }
}

export const submitForm = (formName, data, id = null, location = null) => dispatch => {
  dispatch(setFormLocked(formName, true, id))
  const apiPath = (location === null) ? apiPaths[formName].POST : location
  const apiMethod = (location === null) ? 'post' : 'patch'

  axios[apiMethod](apiPath, JSON.stringify(data))
    .then((response) => dispatch([
      setFormSaved(formName, true, id),
      setFormLocation(formName, response.headers.location, id)
    ]))
    .catch(() => {})
    .finally(() => dispatch(setFormLocked(formName, false, id)))

}

export const onCaptchaSubmit = (onSubmit, fields) => dispatch => {
  if (fields.captcha === null) {
    dispatch({
      type: actionTypes.error.ERROR_FLAG,
      flag: 'captcha',
      value: true
    })
    dispatch(setAlert('Unable to submit form', 'Please complete the reCAPTCHA verification process', ALERT_DANGER))
  } else {
    return dispatch(onSubmit(fields))
  }
}
