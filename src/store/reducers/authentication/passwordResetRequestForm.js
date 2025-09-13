import actionTypes from '../../actionTypes'
import { createReducer } from '../../helpers/utility'
import { formReducerObject, formSettings } from '../../helpers/formReducers'

const initialState = {
  form: {
    username: '',
    captcha: null,
  },
  settings: formSettings
}

const reducer = createReducer(initialState, formReducerObject(actionTypes.passwordResetRequestForm))


export default reducer