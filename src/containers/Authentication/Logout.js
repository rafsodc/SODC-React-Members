import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Aux from '../../hoc/Aux'
import { logout } from '../../store/actions/authentication'

const Logout = () => {

  const dispatch = useDispatch()

  useEffect(() => dispatch(logout()), [dispatch])

  return <Aux>
    <h1>Logged Out</h1>
    <p>You have been successfully logged out.</p>
  </Aux>

}

export default Logout