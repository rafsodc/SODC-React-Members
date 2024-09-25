import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { boolToStr, floatToCur } from '../../utils/funcs/funcs'
import { loadEventTickets, resetTickets } from '../../store/actions/ticket'
import Table from 'react-bootstrap/Table'
import {useParams} from 'react-router'

const EventTickets = (props) => {

  const dispatch = useDispatch()
  const {form, settings, loading} = useSelector(state => state.ticketReducer)
  const {id} = useParams();
  const authenticationState = useSelector(state => state.authenticationReducer)

  useEffect(() => {
    dispatch(loadEventTickets(`/events/${id}`))
    return () => {
      dispatch(resetTickets())
    }
  }, [dispatch, id])

  let rows = null;

  if(!loading) {
    rows = Object.entries(form).map(ticket => (
      <tr key={ticket[1].uuid}>
        <td>{ticket[1].lastname}</td>
        <td>{ticket[1].firstname}</td>
        <td>{ticket[1].rank}</td>
        <td>{boolToStr(ticket[1].ticketType.symposium)}</td>
        <td>{boolToStr(ticket[1].ticketType.dinner)}</td>
        <td>{ticket[1].owner.fullName}</td>
      </tr>
    ))
  }

  return <Table>
    <thead>
    <tr>
      <th>{'Last Name'}</th>
      <th>{'First Name'}</th>
      <th>{'Rank'}</th>
      <th>{'Symposium'}</th>
      <th>{'Dinner'}</th>
      <th>{'Booker'}</th>
    </tr>
    </thead>
    <tbody>{rows}</tbody>
  </Table>
}

export default EventTickets

