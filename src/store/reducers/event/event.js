//import * as actionTypes from "../actions/actionsTypes";
import actionTypes from '../../actionTypes'
import {createReducer, updateObject, setParam} from '../../helpers/utility'
import merge from 'merge'


const initialTicketTypeItemState = {
  description: "",
  symposium: false,
  dinner: false,
  serving: false,
  student: false,
  guest: false,
  price: 0
}

export const initialItemState = {
  title: "",
  date: "",
  bookingOpen: "",
  bookingClose: "",
  venue: "",
  description: "",
  principalSpeaker: "",
  sponsor: "",
  ticketTypes: []
}

const initialState = {
  list: null,
  item: {...initialItemState},
}

const setEventList = (state, action) => setParam(state, updateObject(action, { param: 'list' }))
const setEvent = (state, action) => merge.recursive(true, state, {item: action.value})//setParam(state, updateObject(action, { param: 'event' }))
const clear = () => initialState

const reducer = createReducer(initialState, {
  [actionTypes.event.SET_LIST]: setEventList,
  [actionTypes.event.SET]: setEvent,
  [actionTypes.event.CLEAR]: clear,
})

export default reducer