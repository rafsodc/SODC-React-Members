import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { boolToStr, floatToCur } from '../../utils/funcs/funcs'
import { loadEventTickets } from '../../store/actions/ticket'
import Table from 'react-bootstrap/Table'

const AttendeeList = () => {
  const dispatch = useDispatch()
  const ticketsState = useSelector(state => state.ticketReducer)

  const tickets = ticketsState.filter(ticket => ticket.fields.ticketType.symposium || ticket.fields.ticketType.dinner)
  //const { id } = useParams();
  const iri = '/events/2'

  useEffect(() => {
    dispatch(loadEventTickets(iri))
  }, [dispatch])

  const rows = tickets.map(ticket => (
    <tr>
      <td>{ticket.fields.lastname}</td>
      <td>{ticket.fields.firstname}</td>
      <td>{ticket.fields.rank}</td>
      <td>{boolToStr(ticket.fields.ticketType.symposium)}</td>
      <td>{boolToStr(ticket.fields.ticketType.dinner)}</td>
      <td>{boolToStr(ticket.fields.ticketType.serving)}</td>
      <td>{boolToStr(ticket.fields.ticketType.guest)}</td>
      <td>{floatToCur.format(ticket.fields.ticketType.price)}</td>
      <td>{boolToStr(ticket.fields.paid)}</td>
      <td>{ticket.fields.dietary}</td>
      <td>{ticket.fields.seatingPreferences.map(preference => preference.fullName).join('\n')}</td>
      <td>{ticket.fields.owner.fullName}</td>
    </tr>
  ))

  const totals = <tr>
    <th>Totals</th>
    <th></th>
    <th>{tickets.length}</th>
    <th>{tickets.filter(ticket => ticket.fields.ticketType.symposium).length}</th>
    <th>{tickets.filter(ticket => ticket.fields.ticketType.dinner).length}</th>
    <th>{tickets.filter(ticket => ticket.fields.ticketType.serving).length}</th>
    <th>{tickets.filter(ticket => ticket.fields.ticketType.guest).length}</th>
    <th>{floatToCur.format(tickets.reduce((a, ticket) => ticket.fields.ticketType.price + a, 0))}</th>
    <th>{tickets.filter(ticket => ticket.fields.paid).length}</th>
    <th></th>
    <th></th>
    <th></th>
  </tr>

  const table = <Table>
    <thead>
    <tr>
      <th>{'Last Name'}</th>
      <th>{'First Name'}</th>
      <th>{'Rank'}</th>
      <th>{'Symposium'}</th>
      <th>{'Dinner'}</th>
      <th>{'Serving'}</th>
      <th>{'Guest'}</th>
      <th>{'Amount'}</th>
      <th>{'Paid'}</th>
      <th>{'Dietary Requirements'}</th>
      <th>{'Seating Preferences'}</th>
      <th>SODC Account</th>
    </tr>
    </thead>
    <tbody>{rows}</tbody>
    <tfoot>{totals}</tfoot>
  </Table>

  return table

}

export default AttendeeList