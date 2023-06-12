//import * as actionTypes from "../actions/actionsTypes";
import actionTypes from '../actionTypes/'
import {createReducer, updateObject, setParam, mergeObject} from '../helpers/utility'
import {setField} from "../helpers/formReducers";

const initialItemState = {
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
  item: initialItemState,
  form: {
    fields: initialItemState,
    locked: false,
    hidden: false,
    saved: false,
    isLoaded: false
  },
  ownerSelectDisabled: false,
}

const setEventList = (state, action) => setParam(state, updateObject(action, { param: 'list' }))
const setEvent = (state, action) => setParam(state, updateObject(action, { param: 'event' }))
const setOwnerSelectDisabled = (state, action) => setParam(state, updateObject(action, { param: 'ownerSelectDisabled' }))
const clear = () => initialState
const setLocked = (state, action) => setParam(state, updateObject(action, { param: 'locked' }))
const setHidden = (state, action) => setParam(state, updateObject(action, { param: 'hidden' }))
const setSaved = (state, action) => mergeObject(state, action)
const setIsLoaded = (state, action) => setParam(state, updateObject(action, { param: 'isLoaded' }))

const reducer = createReducer(initialState, {
  [actionTypes.event.SET_LIST]: setEventList,
  [actionTypes.event.SET_FIELD]: setField,
  [actionTypes.event.SET_LOCKED]: setLocked,
  [actionTypes.event.SET_HIDDEN]: setHidden,
  [actionTypes.event.SET_SAVED]: setSaved,
  [actionTypes.event.SET_IS_LOADED]: setIsLoaded,
  [actionTypes.event.SET]: setEvent,
  [actionTypes.event.CLEAR]: clear,
  [actionTypes.ticket.ADD]: setOwnerSelectDisabled,
})

export default reducer