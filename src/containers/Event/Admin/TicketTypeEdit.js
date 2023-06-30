import React from 'react'
import useFormBuilder from '../../../hooks/Forms/useFormBuilder'
import { ticketFormSchema } from '../../../utils/forms/schema'
import { useDispatch } from 'react-redux'
import { Accordion, Card } from 'react-bootstrap'
import { setAccordion, setTicketField, submitTicketForm } from '../../../store/actions'
import SavedBadge from '../../Booking/SavedBadge'
import ErrorBadge from '../../Booking/ErrorBadge'
import { isEmptyObject } from '../../../utils/funcs/funcs'
import { deleteTicket } from '../../../store/actions/ticket'
import Aux from '../../../hoc/Aux'
import PaidBadge from '../../Booking/PaidBadge'

const TicketTypeEdit = (props) => {

  const dispatch = useDispatch()

  const onChange = (event) => {
    //const eventValue = (event.target.name === 'ticketType') ? { '@id' : event.target.value } : event.target.value;
    //dispatch(setTicketField({ [event.target.name]: event.target.value }, props.ticket.id))
    //console.log(event.target.name)
  }

  const onSubmit = () => {
    dispatch(submitTicketForm(props.ticket.fields, props.ticket.id, props.ticket.location, props.event, props.owner))
  }

  const handleRemove = () => {
    dispatch([
      deleteTicket(props.ticket.id, props.ticket.location),
      setAccordion('ticket', 0)
    ])
  }

  // If the ticket.fields.ticketType is an object with '@id', change it to a string
  //if (props.ticket.fields.ticketType.hasOwnProperty('@id')) { props.ticket.fields.ticketType = props.ticket.fields.ticketType['@id'] }

  const {
    register,
    errors,
    handleSubmit,
  } = useFormBuilder(() => ticketFormSchema(props.ticket.fields.paid))

  const childProps = {
    errors: errors,
    data: props.ticket.fields,
    onChange: onChange,
    ref: register
  }

  const subtitle = (props.ticket.fields.ticketType !== '') ?
    <Aux>{' - '}
      {props.ticketOptions.find(el => el['@id'] == props.ticket.fields.ticketType).description}
    </Aux> : ''

  return <Card>
    <Card.Header onClick={props.handleHeaderClick}>

      Ticket Type {subtitle} <SavedBadge saved={props.ticket.saved}/> <PaidBadge paid={props.ticket.fields.paid}/><ErrorBadge
      errors={!isEmptyObject(errors)}/>
    </Card.Header>
    <Accordion.Collapse eventKey={props.ticketKey}>
      <Card.Body>
        {/* <TicketForm handleSubmit={handleSubmit} onSubmit={onSubmit} locked={props.ticket.locked}
                    childProps={childProps} ticketOptions={props.ticketOptions} saved={props.ticket.saved}
                    paid={props.ticket.fields.paid} handleRemove={handleRemove}/> */}
        Ticket Type Form Here
      </Card.Body>
    </Accordion.Collapse>
  </Card>

}

export default TicketTypeEdit