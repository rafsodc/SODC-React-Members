import actionTypes from '../../actionTypes'
import { createReducer } from '../../helpers/utility'
import { formReducerObject } from '../../helpers/formReducers'

const initialLoginFormState = {
  fields: {
    email: '',
    captcha: null,
  },
  locked: false,
  hidden: true
}

const reducer = createReducer(initialLoginFormState, formReducerObject(actionTypes.passwordResetRequestForm))

export default reducer