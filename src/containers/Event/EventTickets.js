import React, {useEffect} from "react";
import {longDate} from "../../services/formats/date";
import {useDispatch, useSelector} from "react-redux";
import {Card} from "react-bootstrap";
import BookingBadge from "./BookingBadge";
import {Accordion} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import { boolToStr, floatToCur } from "../../services/funcs/funcs";
import { loadEventTickets } from "../../store/actions/ticket";
import Table from 'react-bootstrap/Table'

const EventTickets = (props) => {

  const dispatch = useDispatch();
  const ticketsState = useSelector(state => state.ticketReducer);
  const authenticationState = useSelector(state => state.authenticationReducer);

  // Remove tickets that are not for Symposium or Dinner (ie 'membership' tickets)
  const tickets = ticketsState.filter(ticket => ticket.fields.ticketType.symposium || ticket.fields.ticketType.dinner)

  useEffect(() => {
    dispatch(loadEventTickets(props.eventId, authenticationState.token_data.iri));
  }, [dispatch]);

  const rows = tickets.map(ticket => (
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
  ));

  return <Table><thead><tr><th>{"Last Name"}</th><th>{"First Name"}</th><th>{"Rank"}</th><th>{"Symposium"}</th><th>{"Dinner"}</th><th>{"Amount"}</th><th>{"Paid"}</th><th>{"Dietary Requirements"}</th></tr></thead><tbody>{rows}</tbody></Table>
}

export default EventTickets;