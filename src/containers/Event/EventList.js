import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadEventList } from '../../store/actions/event'
import Event from './Event'
import { Accordion } from 'react-bootstrap'
import Loading from '../../components/Loading/Loading'

const EventList = () => {

  const dispatch = useDispatch()
  const eventState = useSelector(state => state.eventReducer)

  useEffect(() => dispatch(loadEventList()), [dispatch])

  let content = <Loading/>

  console.log(eventState)

  if (eventState.list !== null) {
    let transformedEvents = eventState.list.map((event, key) => {
      return <Event key={key} eventKey={key.toString()} {...event} showTickets={true}/>
    })
      .reduce((arr, el) => {
        return arr.concat(el)
      }, [])

    if (transformedEvents.length === 0) {
      transformedEvents = <p>No future events scheduled.</p>
    }

    content =
      <Accordion defaultActiveKey="0">
        {transformedEvents}
      </Accordion>
  }

  return content
}

export default EventList