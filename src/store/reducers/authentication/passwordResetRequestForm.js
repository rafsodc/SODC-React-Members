import actionTypes from '../../actionTypes'
import { createReducer } from '../../helpers/utility'
import { formReducerObject, formSettings } from '../../helpers/formReducers'

const initialState = {
  form: {
    email: '',
    captcha: null,
  },
  settings: formSettings
}

const reducer = createReducer(initialState, formReducerObject(actionTypes.passwordResetRequestForm))


export default reducer