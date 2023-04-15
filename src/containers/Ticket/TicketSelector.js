import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

const TicketSelector = (props) => {

  const dispatch = useDispatch()
  const eventState = useSelector(state => state.eventReducer)
  const { id } = useParams()

  //useEffect(() => dispatch(eventGet(`/events/${id}`)), [dispatch]);

  //return (

  //);
  <p>Hi</p>
}

export default TicketSelector