import React from 'react'
import useFormBuilder from '../../../hooks/Forms/useFormBuilder'
import { ticketFormSchema } from '../../../utils/forms/schema'
import { useDispatch } from 'react-redux'
import { Accordion, Card } from 'react-bootstrap'
import SavedBadge from '../../Booking/SavedBadge'

const TicketType = (props) => {

  const dispatch = useDispatch()

  const {
    register,
    errors,
    handleSubmit,
  } = useFormBuilder(() => ticketFormSchema(props.ticket.paid))

  const onChange = (event) => {
    //dispatch(setTicketField(event.target.name, event.target.value, props.ticket.uuid))
    //dispatch(setTicketSaved(false, props.ticket.uuid))
    //dispatch(setTicketSavedBaner(false, props.ticket.uuid))
  }

  const onSubmit = () => {
    //dispatch(submitTicketForm(props.ticket, props.settings.location, props.event, props.owner))
  }

  const handleRemove = () => {
    // dispatch([
    //   //deleteTicket(props.ticket.id, props.ticket.location),
    //   //setAccordion('ticket', 0)
    // ])
  }

  const childProps = {
    errors: errors,
    data: props.ticketType,
    onChange: onChange,
    ref: register
  }

  return <Card>
    <Card.Header onClick={props.handleHeaderClick}>
      {props.ticketType.description}<SavedBadge saved={props.settings.isSaved}/> 
    </Card.Header>
    <Accordion.Collapse eventKey={props.ticketTypeKey}>
      <Card.Body>
        {/* <TicketTypeForm handleSubmit={handleSubmit} onSubmit={onSubmit} locked={props.settings.isLocked}
                    childProps={childProps} saved={props.settings.isSaved} showSavedBanner={props.settings.showSavedBanner}
                    handleRemove={handleRemove}/> */}
      </Card.Body>
    </Accordion.Collapse>
  </Card>

}

export default TicketType