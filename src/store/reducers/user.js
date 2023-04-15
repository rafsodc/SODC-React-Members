import actionTypes from '../actionTypes'
import { createReducer, setParam, updateObject } from '../helpers/utility'
import * as formReducers from '../helpers/formReducers'

const initialState = {
  fields: {
    firstName: '',
    lastName: '',
    rank: null,
    postNominals: '',
    phoneNumber: '',
    mobileNumber: '',
    serviceNumber: '',
    email: '',
    isShared: false,
    modnetEmail: '',
    password: '',
    passwordConfirm: '',
    captcha: null
  },
  locked: false,
  hidden: false,
  saved: false,
  isLoaded: false
}

const setLocked = (state, action) => setParam(state, updateObject(action, { param: 'locked' }))
const setHidden = (state, action) => setParam(state, updateObject(action, { param: 'hidden' }))
const setSaved = (state, action) => setParam(state, updateObject(action, { param: 'saved' }))
const setIsLoaded = (state, action) => setParam(state, updateObject(action, { param: 'isLoaded' }))
const clear = () => initialState

const reducer = createReducer(initialState, {
  [actionTypes.user.SET_FIELD]: formReducers.setField,
  [actionTypes.user.SET_LOCKED]: setLocked,
  [actionTypes.user.SET_HIDDEN]: setHidden,
  [actionTypes.user.SET_SAVED]: setSaved,
  [actionTypes.user.SET_IS_LOADED]: setIsLoaded,
  [actionTypes.user.CLEAR]: clear
})

export default reducer
