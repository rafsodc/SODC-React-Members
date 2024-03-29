import React, { useEffect } from 'react'
import Aux from '../../hoc/Aux'
import { useDispatch, useSelector } from 'react-redux'
import UserTypeAhead from '../../components/TypeAhead/UserTypeAhead'
import { Button } from 'react-bootstrap'
import { setOwner, setOwnerError, setOwnerSelected } from '../../store/actions/booking'
import { setAlert } from '../../store/actions/alert'
import { ALERT_DANGER } from '../../components/AlertWindow/alertTypes'

const BookingOwnerSelect = (props) => {

  const dispatch = useDispatch()
  const bookingState = useSelector(state => state.bookingReducer)
  const user = useSelector(state => state.authenticationReducer.token_data)

  const error = bookingState.ownerError && 'User must be selected'
  const displaySelect = user.roles.includes('ROLE_ADMIN') && !bookingState.ownerSelected

  useEffect(() => {
    dispatch(setOwner(user.iri))
    return () => {
      dispatch(setOwnerSelected(false))
    }
  }, [dispatch, user.iri])

  const handleSelect = (value) => {
    dispatch(setOwner(value))
  }

  const handleClick = () => {
    if (bookingState.owner === null) {
      dispatch([
        setAlert('Error', 'Please select a user', ALERT_DANGER),
        setOwnerError(true)
      ])
    } else {
      dispatch(setOwnerSelected(true))
    }
  }

  if (displaySelect) {
    return <Aux>
      <UserTypeAhead handleSelect={handleSelect} error={error} selected={user.id} id={1}/><br/>
      <Button onClick={handleClick}>Select User</Button>
    </Aux>
  } else {
    return props.children
  }
}

export default BookingOwnerSelect