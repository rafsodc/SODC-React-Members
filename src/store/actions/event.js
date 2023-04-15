import actionTypes from '../actionTypes/'
import axios from '../../utils/axios/axios'
import apiPaths from '../paths'
import { strToDate } from '../../utils/funcs/funcs'

export const loadEvents = () => dispatch => {
  axios.get(apiPaths.FUTURE_EVENTS).then((response) => {
    const data = response.data['hydra:member']
    data.map(item => strToDate(item, ['date', 'bookingOpen', 'bookingClose']))
    return dispatch(setEvents(data))
  })
}

export const loadEvent = (apiUrl) => dispatch => {
  axios.get(apiUrl).then((response) => {
    const data = response.data
    strToDate(data, ['date', 'bookingOpen', 'bookingClose'])
    return dispatch(setEvent(data))
  }).catch(error => {})
}

const setEvents = (events) => {
  return {
    type: actionTypes.SET_EVENTS,
    payload: events,
  }
}

const setEvent = (event) => {
  return {
    type: actionTypes.SET_EVENT,
    payload: event,
  }
}

export const setEventUser = (user) => {
  return {
    type: actionTypes.SET_EVENT_USER,
    payload: user
  }
}
