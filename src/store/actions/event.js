import actionTypes from '../actionTypes/'
import axios from '../../utils/axios/axios'
import apiPaths from '../paths'
import { strToDate } from '../../utils/funcs/funcs'
import {
  clearForm,
  setFormField,
  setFormHidden,
  setFormIsLoaded,
  setFormLocked,
  submitForm
} from '../helpers/formActions'

export const loadEventList = (future = true) => dispatch => {
  let path = future ? apiPaths.event.FUTURE_EVENTS : apiPaths.event.EVENTS
  axios.get(path).then((response) => {
    const data = response.data['hydra:member']
    data.map(item => strToDate(item, ['date', 'bookingOpen', 'bookingClose']))
    return dispatch(setEventList(data))
  })
}

export const loadEvent = (apiUrl) => dispatch => {
  axios.get(apiUrl).then((response) => {
    const data = response.data
    strToDate(data, ['date', 'bookingOpen', 'bookingClose'])
    return dispatch(setEvent(data))
  }).catch(error => {})
}

const setEventList = (events) => ({
    type: actionTypes.event.SET_LIST,
    data: events,
  })

const setEvent = (event) => {
  return {
    type: actionTypes.event.SET,
    data: event,
  }
}

export const submitEventForm = (data, location = null) => {
  return submitForm(actionTypes.event.NAME, data, null, location)
}

export const clearEvent = () => clearForm(actionTypes.event.NAME)

export const setEventField = (data) => setFormField(actionTypes.event.NAME, data)
//export const setEventLocked = (isLocked) => setFormLocked(actionTypes.user.NAME, isLocked)
//export const setEventHidden = (isHidden) => setFormHidden(actionTypes.user.NAME, isHidden)
//export const setEventIsLoaded = (isLoaded) => setFormIsLoaded(actionTypes.user.NAME, isLoaded)

// export const setEventUser = (user) => {
//   return {
//     type: actionTypes.SET_EVENT_USER,
//     payload: user
//   }
// }
