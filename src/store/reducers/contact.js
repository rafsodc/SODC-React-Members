import actionTypes from '../actionTypes'
import { createReducer, setParam, updateObject } from '../helpers/utility'
import * as formReducers from '../helpers/formReducers'

const initialState = {
  fields: {
    name: '',
    email: '',
    subject: '',
    message: '',
    captcha: null
  },
  locked: false,
  saved: false,
}

const setLocked = (state, action) => setParam(state, updateObject(action, { param: 'locked' }))
const setSaved = (state, action) => setParam(state, updateObject(action, { param: 'saved' }))

const reducer = createReducer(initialState, {
  [actionTypes.contact.SET_FIELD]: formReducers.setField,
  [actionTypes.contact.SET_LOCKED]: setLocked,
  [actionTypes.contact.SET_SAVED]: setSaved,
})

export default reducer



