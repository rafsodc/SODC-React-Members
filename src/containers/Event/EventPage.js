import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loadEvent} from '../../store/actions/event'
import Event from './Event'
import {Accordion} from 'react-bootstrap'
import Loading from '../../components/Loading/Loading'
import {useParams} from 'react-router'
import Booking from '../Booking/Booking'
import BookingOwnerSelect from '../Booking/BookingOwnerSelect'

const EventPage = () => {

    const dispatch = useDispatch()
    const {event, ownerSelectDisabled} = useSelector(state => state.eventReducer)
    const {id} = useParams()

    useEffect(() => {
        dispatch(loadEvent(`/events/${id}`))
    }, [dispatch, id])

    if (!event) {
        return <Loading/>
    }

    return (
        <>
            <h2>Event Booking</h2>
            <Accordion>
                <Event {...event} showTickets={false} eventKey={'event'}/>
            </Accordion>
            <br/>
            <BookingOwnerSelect disabled={ownerSelectDisabled}>
                <Booking ticketOptions={event.ticketTypes} event={`/events/${id}`}/>
            </BookingOwnerSelect>
        </>
    )
}

export default EventPage
