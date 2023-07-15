import { addForm, removeForm, formReducerObject, clearAll } from '../../../helpers/formReducers'
import actionTypes from '../../../actionTypes'
import {  } from '../../../helpers/formReducers'
import {createReducer} from '../../../helpers/utility'
import { initialItemState } from './user'

/**
 * Default form state
 */
const initialState = {
    form: [],
    settings: [],
}


const reducerObj = {
    ...formReducerObject(actionTypes.ticketType),
    [actionTypes.user.ADD]: {fn: addForm, args: [initialItemState]},
    [actionTypes.user.REMOVE]: removeForm,
    [actionTypes.user.CLEAR_ALL]: {fn: clearAll, args: [initialState]}
}

const reducer = createReducer(initialState, reducerObj)

export default reducer