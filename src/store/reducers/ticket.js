import actionTypes from '../actionTypes'
import { formSettings, removeForm, setValue, addForm, formReducerObject } from '../helpers/formReducers'
import { createReducer, setParam } from '../helpers/utility'
import { v4 } from 'uuid'
import merge from 'merge'

const initialItemState = {
  rank: '',
  firstname: '',
  lastname: '',
  dietary: '',
  ticketType: '',
  paid: false,
  seatingPreferences: [],
  uuid: v4()
}

const initialState = {
  form: [],
  settings: [],
}

const clearAll = (state, action) => initialState

const addTicket = (state, action) => addForm(state, action, initialItemState)

const reducerObj = {
  ...formReducerObject(actionTypes.ticket),
  [actionTypes.ticket.ADD]: addTicket,
  [actionTypes.ticket.REMOVE]: removeForm,
  [actionTypes.ticket.RESET]: clearAll
}

const reducer = createReducer(initialState, reducerObj)

export default reducer