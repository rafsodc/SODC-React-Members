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
  loading: true,
}

const clearAll = (state, action) => initialState

const addTicket = (state, action) => addForm(state, action, initialItemState)

const setLoading = (state, action) => ({
  ...state,
  loading: action.payload // Boolean value to set loading
});

const reducerObj = {
  ...formReducerObject(actionTypes.ticket),
  [actionTypes.ticket.ADD]: addTicket,
  [actionTypes.ticket.REMOVE]: removeForm,
  [actionTypes.ticket.RESET]: clearAll,
  [actionTypes.ticket.SET_LOADING]: setLoading,
}

const reducer = createReducer(initialState, reducerObj)

export default reducer