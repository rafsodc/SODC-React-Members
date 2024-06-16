import actionTypes from '../../actionTypes'
import { createReducer, setParam, updateObject } from '../../helpers/utility'
import { formSettings, formReducerObject } from '../../helpers/formReducers'


const initialItemState = {
    firstName: '',
    lastName: '',
    rank: null,
    postNominals: '',
    phoneNumber: '',
    mobileNumber: '',
    serviceNumber: '',
    email: '',
    isShared: true,
    isSubscribed: true,
    modnetEmail: '',
    password: '',
    passwordConfirm: '',
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

// const setLocked = (state, action) => setParam(state, updateObject(action, { param: 'locked' }))
// const setHidden = (state, action) => setParam(state, updateObject(action, { param: 'hidden' }))
// const setSaved = (state, action) => setParam(state, updateObject(action, { param: 'saved' }))
// const setIsLoaded = (state, action) => setParam(state, updateObject(action, { param: 'isLoaded' }))
// const clear = () => initialState

const reducer = createReducer(initialState, formReducerObject(actionTypes.user))

// const reducer = createReducer(initialState, {
//   [actionTypes.user.SET_FIELD]: {fn: setValue, args: ['form']},
//   [actionTypes.user.SET_LOCKED]: setLocked,
//   [actionTypes.user.SET_HIDDEN]: setHidden,
//   [actionTypes.user.SET_SAVED]: setSaved,
//   [actionTypes.user.SET_IS_LOADED]: setIsLoaded,
//   [actionTypes.user.CLEAR]: clear
// })

export default reducer
