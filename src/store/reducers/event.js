//import * as actionTypes from "../actions/actionsTypes";
import actionTypes from '../actionTypes/'
import { createReducer, updateObject } from '../helpers/utility'

const initialState = {
  events: null,
  event: null,
  ownerSelectDisabled: false,
}

const setEvents = (state, action) => {
  return updateObject(state, { events: action.payload })
}

const setEvent = (state, action) => {
  return updateObject(state, { event: action.payload })
}

const addTicket = (state, action) => {
  return updateObject(state, { userSelectDisabled: true })
}

const reducer = createReducer(initialState, {
  [actionTypes.SET_EVENTS]: setEvents,
  [actionTypes.SET_EVENT]: setEvent,
  //[actionTypes.SET_USER]: setUser, // This gets called when a user is logged in.
  [actionTypes.ticket.ADD]: addTicket,
})

export default reducer