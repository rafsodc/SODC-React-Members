import actionTypes from '../actionTypes/'
import axios from '../../utils/axios/axios'
import apiPaths from '../paths'
import { strToDate, strToISODate } from '../../utils/funcs/funcs'
import {
  clearForm,
  setFormField,
  setFormHidden,
  setFormIsLoaded,
  setFormLocked,
  submitForm,
  addForm
} from '../helpers/formActions'
import { dataHandler } from '../helpers/utility'
import { setTicketTypeForm } from './ticketTypes'

export const addTicketType = (fields = null) => addForm(actionTypes.ticketType.NAME, fields)

export const loadEventList = (future = true) => dispatch => {
  let path = future ? apiPaths.event.FUTURE_EVENTS : apiPaths.event.EVENTS
  axios.get(path).then((response) => {
    const data = response.data['hydra:member']
    data.map(item => strToDate(item, ['date', 'bookingOpen', 'bookingClose']))
    return dispatch(setEventList(data))
  })
}

export const loadEventItem = (apiUrl) => dispatch => {
  axios.get(apiUrl).then((response) => {
    const event = strToDate(response.data, ['date', 'bookingOpen', 'bookingClose'])
    dispatch(setEvent(event))
  }).catch(error => {})
}

export const loadEventForm = (apiUrl) => dispatch => {
  axios.get(apiUrl).then((response) => {
    const {location, data} = dataHandler(response.data);
    const parsedData = strToISODate(data, ['date', 'bookingOpen', 'bookingClose'])
    dispatch(setEventForm(parsedData, location))
    dispatch(setTicketTypeForm(data.ticketTypes))
  }).catch(error => {})
}

const setEventList = (events) => ({
    type: actionTypes.event.SET_LIST,
    data: events,
  })

const setEvent = (event) => ({
    type: actionTypes.event.SET,
    value: event,
})

export const setEventSaved = (saved) => ({
  type: actionTypes.event.SET_SAVED,
  value: saved,
})

const setEventForm = (form, location) => ({
    type: actionTypes.event.SET_FORM,
    form: form,
    settings: {location: location}
})

export const setEventAccordion = (value) => {
  return {
    type: actionTypes.event.SET_ACCORDION,
    value: value
  }
}

export const submitEventForm = (data, location = null) => {
  return submitForm(actionTypes.event.NAME, data, null, location)
}

export const clearEvent = () => clearForm(actionTypes.event.NAME)

export const setEventField = (property, value) => setFormField(actionTypes.event.NAME, property, value)

//export const setEventLocked = (isLocked) => setFormLocked(actionTypes.user.NAME, isLocked)
//export const setEventHidden = (isHidden) => setFormHidden(actionTypes.user.NAME, isHidden)
//export const setEventIsLoaded = (isLoaded) => setFormIsLoaded(actionTypes.user.NAME, isLoaded)

// export const setEventUser = (user) => {
//   return {
//     type: actionTypes.SET_EVENT_USER,
//     payload: user
//   }
// }
