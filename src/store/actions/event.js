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
  submitForm
} from '../helpers/formActions'
import { dataHandler } from '../helpers/utility'

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
    const data = response.data
    strToDate(data, ['date', 'bookingOpen', 'bookingClose'])
    const object = {item:data}
    return dispatch(setEvent(object))
  }).catch(error => {})
}

export const loadEventForm = (apiUrl) => dispatch => {
  //console.log(apiUrl)
  axios.get(apiUrl).then((response) => {
    const {location, data} = dataHandler(response.data);
    strToISODate(data, ['date', 'bookingOpen', 'bookingClose'])
    //console.log(data)
    return dispatch(setEvent({form: {fields: data, location: location}}))
  }).catch(error => {console.log(error)})
}

// export const loadEventForm = (apiUrl) => dispatch => {
//   //const {location, data} = loadHelper(apiUrl)
//   //console.log(data)
//   //console.log(location)
//   console.log(loadHelper(apiUrl))
//   // axios.get(apiUrl).then((response) => {
//   //   const data = response.data
//   //   strToDate(data, ['date', 'bookingOpen', 'bookingClose'])
//   //   const object = form ? {form:{fields:data, location:data['@id']}} : {item:data}
//   //   return dispatch(setEvent(object))
//   // }).catch(error => {})
// }

const setEventList = (events) => ({
    type: actionTypes.event.SET_LIST,
    data: events,
  })

const setEvent = (object) => {
  console.log(object)
  return {
    type: actionTypes.event.SET,
    object: object,
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
