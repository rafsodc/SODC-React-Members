import actionTypes from '../actionTypes'
import { v4 } from 'uuid'
import apiPaths from '../paths'
import axios from '../../utils/axios/axios'
import { setAlert } from '../actions/alert'
import { ALERT_DANGER } from '../../components/AlertWindow/alertTypes'

export const addForm = (formName, data = null, location = null) => ({
    type: actionTypes[formName].ADD,
    data: data,
    location: location,
    saved: location !== null
  })


export const removeForm = (formName, id) => ({
  type: actionTypes[formName].REMOVE,
  id: id
})

/**
 * 
 * @param {*} formName 
 * @param {*} property 
 * @param {*} value 
 * @param {*} id 
 * @returns 
 * 
 * @todo remove field
 */
export const setFormField = (formName, property, value, id = null) => ({
  type: actionTypes[formName].SET_FIELD,
  property: property,
  value: value,
  id: id
})

export const setFormLocked = (formName, locked, id = null) => ({
  type: actionTypes[formName].SET_LOCKED,
  value: locked,
  id: id
})

export const setFormSaved = (formName, saved, id = null) => ({
  type: actionTypes[formName].SET_SAVED,
  value: saved,
  id: id
})

export const setFormSavedBanner = (formName, saved, id = null) => ({
  type: actionTypes[formName].SET_SAVED_BANNER,
  value: saved,
  id: id
})

export const setFormHidden = (formName, hidden, id = null) => ({
  type: actionTypes[formName].SET_HIDDEN,
  value: hidden,
  id: id
})

export const setFormLocation = (formName, location, id = null) => ({
  type: actionTypes[formName].SET_LOCATION,
  value: location,
  id: id
})

export const setFormIsLoaded = (formName, isLoaded, id = null) => ({
  type: actionTypes[formName].SET_LOADED,
  value: isLoaded,
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
    .then((response) => { 
      dispatch(setFormSaved(formName, true, id))
      dispatch(setFormSavedBanner(formName, true, id))
      if(response.headers.location) {
        dispatch(setFormLocation(formName, response.headers.location, id))
      }
    })
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
