import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {eventGet} from "../../store/actions/event";
import Aux from "../../hoc/Aux";
import {useParams} from "react-router";
import Event from "../Event/Event";
import {Accordion, Button} from "react-bootstrap";
import Ticket from "./Ticket";
import {addTicket} from "../../store/actions";

const Booking = (props) => {

  const dispatch = useDispatch();
  const eventState = useSelector(state => state.eventReducer);
  const formState = useSelector(state => state.formsReducer.ticket);
  const { id } = useParams();

  useEffect(() => dispatch(eventGet(`/events/${id}`)), [dispatch]);

  // Something about getting current tickets and showing these

  const handleAddTicket = () => {
    dispatch(addTicket());
  }

  let transformedTicketForms = formState.map( (ticket, key) => {
    return <Ticket key={key} {...ticket} />;
  } )
  .reduce((arr, el) => {
    return arr.concat(el)
  }, [])

  //const tickets = bookingState.ticketCount > 0 ? <Ticket formKey={1} /> : "";

  return (
    <Aux>
      <Accordion>
      <Event {...eventState.event} eventKey={"0"}/><br/>
      {/*<Ticket />*/}
        {transformedTicketForms}
      <Button onClick={handleAddTicket}>Add Ticket</Button>
      </Accordion>
    </Aux>
  );

};

export default Booking;