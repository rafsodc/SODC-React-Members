import actionTypes from '../../actionTypes'
import { createReducer, setParam } from '../../helpers/utility'
import { setValue } from '../../helpers/formReducers'

const initialState = {
  form: {
    email: '',
    password: '',
  },
  settings: {
    locked: false,
    hidden: true
  }
  
}

const clearForm = (state, action) => (initialState);

//const reducer = createReducer(initialLoginFormState, formReducerObject(actionTypes.loginForm))

const reducer = createReducer(initialState, {
  [actionTypes.loginForm.SET_FIELD]: {fn: setValue, args: ['form']},
  [actionTypes.loginForm.SET_HIDDEN]: {fn: setValue, args: ['settings', 'hidden']},
  [actionTypes.loginForm.SET_LOCKED]: {fn: setValue, args: ['settings', 'locked']},
  [actionTypes.loginForm.CLEAR]: clearForm
})

export default reducer