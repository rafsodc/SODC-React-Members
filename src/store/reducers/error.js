import { updateObject } from '../helpers/utility'
import * as actionTypes from '../actions/actionsTypes'

const initialState = {
  Page: false,
  captcha: false,
}

const errorFlag = (state, action) => {
  return updateObject(state, { [action.flag]: action.value })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ERROR_FLAG:
      return errorFlag(state, action)
    default:
      return state
  }
}

export default reducer