//import * as actionTypes from "../actions/actionsTypes";
import actionTypes from '../../actionTypes'
import { formSettings } from '../../helpers/formReducers'
import {createReducer, updateObject, setParam} from '../../helpers/utility'
import merge from 'merge'

export const initialItemState = {
  title: "",
  date: "",
  bookingOpen: "",
  bookingClose: "",
  venue: "",
  description: "",
  principalSpeaker: "",
  sponsor: ""
}

const initialState = {
  list: null,
  item: {...initialItemState},
  itemSettings: {...formSettings}
}

const setEventList = (state, action) => setParam(state, updateObject(action, { param: 'list' }))
const setEvent = (state, action) => merge.recursive(true, state, {item: action.value, itemSettings:{isLoaded: true}})//setParam(state, updateObject(action, { param: 'event' }))
const clear = () => initialState

const reducer = createReducer(initialState, {
  [actionTypes.event.SET_LIST]: setEventList,
  [actionTypes.event.SET]: setEvent,
  [actionTypes.event.CLEAR]: clear,
})

export default reducer