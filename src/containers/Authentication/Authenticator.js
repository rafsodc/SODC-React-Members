import React, { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Login from '../Authentication/Login'
import { loadUser, refreshToken } from '../../store/actions/'
import axios from '../../utils/axios/axios'
import Page403 from '../../components/Page403/Page403'

const Authenticator = (props) => {

  const auth = useSelector(state => state.authenticationReducer)
  const form = useSelector(state => state.loginFormReducer)
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    if (auth.authenticated) {
      dispatch(loadUser(auth.token_data.iri))
    } else {
      dispatch(refreshToken())
    }
  }, [dispatch, auth.authenticated, auth.token_data.iri])

  if (props.access) {
    return props.children
  } else if (auth.authenticated) {
    return <Page403/>
  } else
    return form.hidden ? '' : <Login/>
}

export default Authenticator