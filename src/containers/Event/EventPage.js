import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadEvent } from '../../store/actions/event'
import Aux from '../../hoc/Aux'
import Event from './Event'
import { Accordion } from 'react-bootstrap'
import Loading from '../../ReactUI/Loading/Loading'
import { useParams } from 'react-router'
import Booking from '../Booking/Booking'
import BookingOwnerSelect from '../Booking/BookingOwnerSelect'

const EventPage = () => {

  const dispatch = useDispatch()
  const eventState = useSelector(state => state.eventReducer)

  const { id } = useParams()

  useEffect(() => {
    dispatch(loadEvent(`/events/${id}`))
  }, [dispatch])

  if (eventState.event !== null) {
    return <Aux>
      <h2>Event Booking</h2>
      <Accordion>
        <Event {...eventState.event} showTickets={false} eventKey={'event'}/>
      </Accordion>
      <br/>
      <BookingOwnerSelect disabled={eventState.ownerSelectDisabled}>
        <Booking ticketOptions={eventState.event.ticketTypes} event={`/events/${id}`}/>
      </BookingOwnerSelect>
    </Aux>
  } else {
    return <Loading/>
  }

}

export default EventPage