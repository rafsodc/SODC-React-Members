import actionTypes from '../actionTypes/'
import axios from '../../utils/axios/axios'
import apiPaths from '../paths'
import { strToDate } from '../../utils/funcs/funcs'

export const loadEventList = (future = true) => dispatch => {
  let path = future ? apiPaths.FUTURE_EVENTS : apiPaths.EVENTS
  axios.get(path).then((response) => {
    const data = response.data['hydra:member']
    data.map(item => strToDate(item, ['date', 'bookingOpen', 'bookingClose']))
    return dispatch(setEventList(future, data))
  })
}

export const loadEvent = (apiUrl) => dispatch => {
  axios.get(apiUrl).then((response) => {
    const data = response.data
    strToDate(data, ['date', 'bookingOpen', 'bookingClose'])
    return dispatch(setEvent(data))
  }).catch(error => {})
}

const setEventList = (future, events) => {
  let actionType = future ? actionTypes.event.SET_FUTURE_LIST:actionTypes.event.SET_LIST
  return {
    type: actionType,
    data: events,
  }
}

const setEvent = (event) => {
  return {
    type: actionTypes.event.SET,
    data: event,
  }
}

// export const setEventUser = (user) => {
//   return {
//     type: actionTypes.SET_EVENT_USER,
//     payload: user
//   }
// }
