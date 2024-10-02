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
  const admin = authenticationState.token_data.roles.includes("ROLE_ADMIN");

  if(!loading) {
    rows = Object.entries(form).map(ticket => {
      if(!ticket[1].cancelled && (ticket[1].ticketType.symposium || ticket[1].ticketType.dinner)) {
        return (
        <tr key={ticket[1].uuid}>
          <td>{ticket[1].lastname}</td>
          <td>{ticket[1].firstname}</td>
          <td>{ticket[1].rank}</td>
          <td>{boolToStr(ticket[1].ticketType.symposium)}</td>
          <td>{boolToStr(ticket[1].ticketType.dinner)}</td>
          <td>{ticket[1].owner.fullName}</td>

          {/* Conditionally add more fields if the user is an admin */}
          {admin && (
            <>
              <td>{boolToStr(ticket[1].paid)}</td>
              <td>{ticket[1].dietary || 'N/A'}</td>
              <td>
                {ticket[1].seatingPreferencesDetails && ticket[1].seatingPreferencesDetails.length > 0
                  ? ticket[1].seatingPreferencesDetails.map(pref => <span key={pref['@id']}>{pref.fullName}<br /></span>)
                  : 'No preferences'}
              </td>
              <td>{ticket[1].owner.serviceNumber}</td>
            </>
          )}

        </tr>
      )
      }
    })
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
      {admin && (
        <>
          <th>{'Paid'}</th>
          <th>{'Dietary'}</th>
          <th>{'Seating Preferences'}</th>
          <th>{'Booker\'s Service Number'}</th>
        </>
      )}
    </tr>
    </thead>
    <tbody>{rows}</tbody>
  </Table>
}

export default EventTickets

