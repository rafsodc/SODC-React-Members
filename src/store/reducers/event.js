//import * as actionTypes from "../actions/actionsTypes";
import actionTypes from '../actionTypes/'
import { createReducer, updateObject, setParam } from '../helpers/utility'

const initialState = {
  futureEventList: null,
  eventList: null,
  event: null,
  ownerSelectDisabled: false,
}

const setFutureEventList = (state, action) => setParam(state, updateObject(action, { param: 'futureEventList' }))
const setEventList = (state, action) => setParam(state, updateObject(action, { param: 'eventList' }))
const setEvent = (state, action) => setParam(state, updateObject(action, { param: 'event' }))
const setOwnerSelectDisabled = (state, action) => setParam(state, updateObject(action, { param: 'ownerSelectDisabled' }))

const reducer = createReducer(initialState, {
  [actionTypes.event.SET_LIST]: setEventList,
  [actionTypes.event.SET_FUTURE_LIST]: setFutureEventList,
  [actionTypes.event.SET]: setEvent,
  [actionTypes.ticket.ADD]: setOwnerSelectDisabled,
})

export default reducer