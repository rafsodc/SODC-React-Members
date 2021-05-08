import React from "react";
import useFormBuilder from "../../hooks/Forms/useFormBuilder";
import {ticketFormSchema} from "../../services/forms/schema";
import {useDispatch} from "react-redux";
import TicketForm from "./TicketForm";
import {Accordion, Card} from "react-bootstrap";
import {setTicketField, setTicketLocked, submitTicketForm} from "../../store/actions";
import SavedBadge from "../Booking/SavedBadge";
import ErrorBadge from "../Booking/ErrorBadge";
import {isEmptyObject} from "../../services/funcs/funcs";
import actionTypes from "../../store/actionTypes";
import {submitForm} from "../../store/helpers/formActions";


const Ticket = (props) => {
  const dispatch = useDispatch();

  const {
    register,
    errors,
    handleSubmit,
  } = useFormBuilder(ticketFormSchema)

  const onChange = (event) => {
    dispatch(setTicketField({[event.target.name]: event.target.value}, props.id));
  }

  const onSubmit = () => {
    dispatch(submitTicketForm(props.ticket.fields, props.ticket.id, props.ticket.location, props.event, props.owner))
  }

  const childProps = {
    errors: errors,
    data: props.ticket.fields,
    onChange: onChange,
    ref: register
  }

  const subtitle = (props.ticket.fields.ticketType !== "") ? " - " + props.ticketOptions.find(el => el.value = props.ticket.fields.ticketType).description : "";

  return <Card>
    <Card.Header onClick={props.handleHeaderClick}>
      Ticket {props.ticketKey}{subtitle} <SavedBadge saved={props.ticket.saved}/> <ErrorBadge errors={!isEmptyObject(errors)}/>
    </Card.Header>
    <Accordion.Collapse eventKey={props.ticketKey}>
      <Card.Body>
        <TicketForm handleSubmit={handleSubmit} onSubmit={onSubmit} locked={props.ticket.locked}
               childProps={childProps} ticketOptions={props.ticketOptions} saved={props.ticket.saved}/>
      </Card.Body>
    </Accordion.Collapse>
  </Card>;

};


export default Ticket;