import actionTypes from '../actionTypes'
import { createReducer, setParam, updateObject } from '../helpers/utility'

const initialState = {
  content: null,
  loading: true,
}

const setContent = (state, action) => setParam(state, updateObject(action, { param: 'content' }))
const setLoading = (state, action) => setParam(state, updateObject(action, { param: 'loading' }))
const clear = () => initialState

const reducer = createReducer(initialState, {
  [actionTypes.page.SET_CONTENT]: setContent,
  [actionTypes.page.SET_LOAD]: setLoading,
  [actionTypes.page.CLEAR]: clear
})

export default reducer