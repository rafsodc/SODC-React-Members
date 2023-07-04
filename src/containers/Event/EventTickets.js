import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { boolToStr, floatToCur } from '../../utils/funcs/funcs'
import { loadEventTickets } from '../../store/actions/ticket'
import Table from 'react-bootstrap/Table'

const EventTickets = (props) => {

  const dispatch = useDispatch()
  const {form, settings} = useSelector(state => state.ticketReducer)
  const authenticationState = useSelector(state => state.authenticationReducer)

  useEffect(() => {
    dispatch(loadEventTickets(props.eventId, authenticationState.token_data.iri))
  }, [dispatch])

  const rows = form.map(ticket => (
    <tr key={ticket.id}>
      <td>{ticket.fields.lastname}</td>
      <td>{ticket.fields.firstname}</td>
      <td>{ticket.fields.rank}</td>
      <td>{boolToStr(ticket.fields.ticketType.symposium)}</td>
      <td>{boolToStr(ticket.fields.ticketType.dinner)}</td>
      <td>{floatToCur.format(ticket.fields.ticketType.price)}</td>
      <td>{boolToStr(ticket.fields.paid)}</td>
      <td>{ticket.fields.dietary}</td>
    </tr>
  ))

  return <Table>
    <thead>
    <tr>
      <th>{'Last Name'}</th>
      <th>{'First Name'}</th>
      <th>{'Rank'}</th>
      <th>{'Symposium'}</th>
      <th>{'Dinner'}</th>
      <th>{'Amount'}</th>
      <th>{'Paid'}</th>
      <th>{'Dietary Requirements'}</th>
    </tr>
    </thead>
    <tbody>{rows}</tbody>
  </Table>
}

export default EventTickets