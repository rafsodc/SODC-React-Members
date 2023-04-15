import actionTypes from '../../actionTypes'
import { createReducer, setParam, updateObject } from '../../helpers/utility'
import jwtDecode from 'jwt-decode'

const initialAuthState = {
  authenticated: false,
  token: null,
  token_data: { roles: ['IS_AUTHENTICATED_ANONYMOUSLY'] },
  user: null
}

const authenticate = (state, action) => {
  const jwt = jwtDecode(action.token)
  return updateObject(state, { authenticated: true, token: action.token, token_data: jwt })
}

const logout = (state, action) => {
  return initialAuthState
}

const setUser = (state, action) => setParam(state, updateObject(action, { param: 'user' }))

const reducer = createReducer(initialAuthState, {
  [actionTypes.authentication.AUTHENTICATE]: authenticate,
  [actionTypes.authentication.SET_USER]: setUser,
  [actionTypes.authentication.LOGOUT]: logout,
})

export default reducer