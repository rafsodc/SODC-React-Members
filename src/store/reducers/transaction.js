import { createReducer } from '../helpers/utility'
import actionTypes from '../actionTypes'

const setOrders = (state, action) => {
  return action.data
}

const reducer = createReducer([], {
  [actionTypes.transaction.SET_TRANSACTIONS]: setOrders,
})

export default reducer