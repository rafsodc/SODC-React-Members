import React from 'react'
import useFormBuilder from '../../hooks/Forms/useFormBuilder'
import { ticketFormSchema } from '../../utils/forms/schema'
import { useDispatch } from 'react-redux'
import TicketForm from './TicketForm'
import { Accordion, Card } from 'react-bootstrap'
import { setAccordion, setTicketField, submitTicketForm } from '../../store/actions'
import SavedBadge from '../Booking/SavedBadge'
import ErrorBadge from '../Booking/ErrorBadge'
import { isEmptyObject } from '../../utils/funcs/funcs'
import { deleteTicket, setTicketSaved, setTicketSavedBaner, setTicketSetting } from '../../store/actions/ticket'
import Aux from '../../hoc/Aux'
import PaidBadge from '../Booking/PaidBadge'
import CancelledBadge from '../Booking/CancelledBadge'

const Ticket = (props) => {

  const dispatch = useDispatch()

  const {
    register,
    errors,
    handleSubmit,
  } = useFormBuilder(() => ticketFormSchema(props.ticket.paid))

  const onChange = (event) => {
    //const eventValue = (event.target.name === 'ticketType') ? { '@id' : event.target.value } : event.target.value;
    dispatch(setTicketField(event.target.name, event.target.value, props.ticket.uuid))
    dispatch(setTicketSaved(false, props.ticket.uuid))
    dispatch(setTicketSavedBaner(false, props.ticket.uuid))
  }

  const onSubmit = () => {
    dispatch(submitTicketForm(props.ticket, props.settings.location, props.event, props.owner))
  }

  const handleRemove = () => {
    dispatch([
      deleteTicket(props.ticket.uuid, props.settings.location),
      setAccordion('ticket', 0)
    ])
  }

  // If the ticket.fields.ticketType is an object with '@id', change it to a string
  if (props.ticket.ticketType.hasOwnProperty('@id')) { props.ticket.ticketType = props.ticket.ticketType['@id'] }

  const childProps = {
    errors: errors,
    data: props.ticket,
    //data: {...props.ticket.fields, ticketType: props.ticket.fields.ticketType['@id']},
    onChange: onChange,
    ref: register
  }

  const subtitle = (props.ticket.ticketType !== '') ?
    <Aux>{' - '}
      {props.ticketOptions.find(el => el['@id'] == props.ticket.ticketType).description}
    </Aux> : ''

  return <Card>
    <Card.Header onClick={props.handleHeaderClick}>

      Ticket {subtitle} <SavedBadge saved={props.settings.isSaved}/> <PaidBadge paid={props.ticket.paid}/> <CancelledBadge cancelled={props.ticket.cancelled}/> <ErrorBadge
      errors={!isEmptyObject(errors)}/>
    </Card.Header>
    <Accordion.Collapse eventKey={props.ticketKey}>
      <Card.Body>
        <TicketForm handleSubmit={handleSubmit} onSubmit={onSubmit} locked={props.settings.isLocked}
                    childProps={childProps} ticketOptions={props.ticketOptions} saved={props.settings.isSaved} showSavedBanner={props.settings.showSavedBanner}
                    paid={props.ticket.isPaid} handleRemove={handleRemove}/>
      </Card.Body>
    </Accordion.Collapse>
  </Card>

}

export default Ticket