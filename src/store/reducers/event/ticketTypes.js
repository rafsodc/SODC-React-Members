//import * as actionTypes from "../actions/actionsTypes";
import actionTypes from '../../actionTypes'
import {createReducer, updateObject, setParam, mergeObject} from '../../helpers/utility'
import merge from 'merge'
import { formSettings, removeForm, setValue, addForm, formReducerObject } from '../../helpers/formReducers'

const initialState = {
  form: [],
  settings: [],
}

const initialItemState = {
  description: "",
  dinner: false,
  symposium: false,
  price: 0,
  guest: false,
  serving: false,
  student: false,
  retired: false,
  uuid: null
}

const clearAll = (state, action) => initialState

const addTicketType = (state, action) => addForm(state, action, initialItemState)

const reducerObj = {
  ...formReducerObject(actionTypes.ticketType),
  [actionTypes.ticketType.ADD]: addTicketType,
  [actionTypes.ticketType.REMOVE]: removeForm,
  [actionTypes.ticketType.CLEAR_ALL]: clearAll
}

const reducer = createReducer(initialState, reducerObj)

export default reducer