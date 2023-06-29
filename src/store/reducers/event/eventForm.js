//import * as actionTypes from "../actions/actionsTypes";
import actionTypes from '../../actionTypes'
import { formReducerObject, formSettings } from '../../helpers/formReducers'
import {createReducer, updateObject, setParam, mergeObject} from '../../helpers/utility'
import merge from 'merge'
import { setFormField } from '../../helpers/formActions'
import { initialItemState } from './event'

const initialTicketTypeItemState = {
  description: "",
  symposium: false,
  dinner: false,
  serving: false,
  student: false,
  guest: false,
  price: 0
}

const initialState = {
  form: {...initialItemState},
  settings: formSettings,
}

const reducer = createReducer(initialState, formReducerObject(actionTypes.event))

export default reducer