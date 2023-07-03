import actionTypes from '../actionTypes'
import { formReducerObject, formSettings } from '../helpers/formReducers'
import { createReducer, setParam, updateObject } from '../helpers/utility'

const initialItemState = {
  name: '',
  email: '',
  subject: '',
  message: '',
  captcha: null
}

const initialState = {
  form: {
    ...initialItemState
  },
  settings: {
    ...formSettings
  }
}

const reducer = createReducer(initialState, formReducerObject(actionTypes.contact))

export default reducer



