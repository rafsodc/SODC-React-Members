import actionTypes from '../../actionTypes'
import { createReducer } from '../../helpers/utility'
import { formReducerObject, formSettings } from '../../helpers/formReducers'

const initialState = {
  form: {
    password: '',
    passwordConfirm: '',
  },
  settings: formSettings
}

const reducer = createReducer(initialState, formReducerObject(actionTypes.passwordResetSubmitForm))

export default reducer