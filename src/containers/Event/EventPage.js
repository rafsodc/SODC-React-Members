import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {clearEvent, loadEventItem} from '../../store/actions/event'
import Event from './Event'
import {Accordion} from 'react-bootstrap'
import Loading from '../../components/Loading/Loading'
import {useParams} from 'react-router'
import Booking from '../Booking/Booking'
import BookingOwnerSelect from '../Booking/BookingOwnerSelect'

const EventPage = () => {

    const dispatch = useDispatch()
    const {item, itemSettings} = useSelector(state => state.eventReducer)
    const {id} = useParams()

    useEffect(() => {
        dispatch(loadEventItem(`/events/${id}`));
        return () => {
          dispatch(clearEvent())
        }
    }, [dispatch, id])

    if (!itemSettings.isLoaded) {
        return <Loading/>
    }    

    return (
        <>
            <h2>Event Booking</h2>
            <Accordion>
                <Event {...item} showTickets={false} eventKey={'event'}/>
            </Accordion>
            <br/>
            <BookingOwnerSelect>
                <Booking ticketOptions={item.ticketTypes} event={`/events/${id}`}/>
            </BookingOwnerSelect>
        </>
    )
}

export default EventPage
