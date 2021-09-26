import React from "react";
import useFormBuilder from "../../hooks/Forms/useFormBuilder";
import {ticketFormSchema} from "../../services/forms/schema";
import {useDispatch} from "react-redux";
import TicketForm from "./TicketForm";
import {Accordion, Card} from "react-bootstrap";
import {setAccordion, setTicketField, setTicketLocked, submitTicketForm} from "../../store/actions";
import SavedBadge from "../Booking/SavedBadge";
import ErrorBadge from "../Booking/ErrorBadge";
import {isEmptyObject} from "../../services/funcs/funcs";
import {deleteTicket, loadTickets, removeTicket} from "../../store/actions/ticket";
import Aux from "../../hoc/Aux"
import PaidBadge from "../Booking/PaidBadge";


const Ticket = (props) => {
  const dispatch = useDispatch();

  const thisTicketFormSchema = () => ticketFormSchema(props.ticket.fields.paid)

  const {
    register,
    errors,
    handleSubmit,
  } = useFormBuilder(thisTicketFormSchema)

  //, {paid: props.ticket.fields.paid}

  const onChange = (event) => {
    dispatch(setTicketField({[event.target.name]: event.target.value}, props.ticket.id));
  }

  const onSubmit = () => {
    dispatch(submitTicketForm(props.ticket.fields, props.ticket.id, props.ticket.location, props.event, props.owner))
  }

  const handleRemove = () => {
    dispatch([
      deleteTicket(props.ticket.id, props.ticket.location),
      setAccordion('ticket', 0)
    ]);
  }

  const childProps = {
    errors: errors,
    data: props.ticket.fields,
    onChange: onChange,
    ref: register
  }

  const subtitle = (props.ticket.fields.ticketType !== "") ? 
    <Aux>{" - "}
      {props.ticketOptions.find(el => el['@id'] == props.ticket.fields.ticketType).description}
    </Aux>: ""

  return <Card>
    <Card.Header onClick={props.handleHeaderClick}>
      
      Ticket {subtitle} <SavedBadge saved={props.ticket.saved}/> <PaidBadge paid={props.ticket.fields.paid}/><ErrorBadge errors={!isEmptyObject(errors)}/>
    </Card.Header>
    <Accordion.Collapse eventKey={props.ticketKey}>
      <Card.Body>
        <TicketForm handleSubmit={handleSubmit} onSubmit={onSubmit} locked={props.ticket.locked}
               childProps={childProps} ticketOptions={props.ticketOptions} saved={props.ticket.saved} paid={props.ticket.fields.paid} handleRemove={handleRemove}/>
      </Card.Body>
    </Accordion.Collapse>
  </Card>;

};


export default Ticket;