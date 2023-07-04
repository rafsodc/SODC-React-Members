import actionTypes from '../../actionTypes'
import { createReducer, setParam } from '../../helpers/utility'
import { formReducerObject, formSettings, setValue } from '../../helpers/formReducers'

const initialState = {
  form: {
    email: '',
    password: '',
  },
  settings: formSettings
  
}

const clearForm = (state, action) => (initialState);

//const reducer = createReducer(initialLoginFormState, formReducerObject(actionTypes.loginForm))

const reducer = createReducer(initialState, formReducerObject(actionTypes.loginForm))

export default reducer