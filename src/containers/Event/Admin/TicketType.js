import React from 'react'
import useFormBuilder from '../../../hooks/Forms/useFormBuilder'
import { ticketTypeFormSchema } from '../../../utils/forms/schema'
import { useDispatch } from 'react-redux'
import { Accordion, Card } from 'react-bootstrap'
import SavedBadge from '../../Booking/SavedBadge'
import { deleteTicketType, setTicketTypeField, setTicketTypeSaved, setTicketTypeSavedBanner, submitTicketTypeForm } from '../../../store/actions/ticketTypes'
import { setAccordion } from '../../../store/actions/layout'
import TicketTypeForm from './TicketTypeForm'

const TicketType = (props) => {

  const dispatch = useDispatch()

  const {
    register,
    errors,
    handleSubmit,
  } = useFormBuilder(() => ticketTypeFormSchema())

  const onChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    dispatch(setTicketTypeField(event.target.name, value, props.form.uuid))
    dispatch(setTicketTypeSaved(false, props.form.uuid))
    dispatch(setTicketTypeSavedBanner(false, props.form.uuid))
  }

  const onSubmit = () => {
    dispatch(submitTicketTypeForm(props.form, props.settings.location, props.event))
  }

  const handleRemove = () => {
    dispatch([
      deleteTicketType(props.form.uuid, props.settings.location),
      setAccordion(0)
    ])
  }

  const childProps = {
    errors: errors,
    data: props.form,
    onChange: onChange,
    ref: register
  }

  return <Card>
    <Card.Header onClick={props.handleHeaderClick}>
      {props.form.description}<SavedBadge saved={props.settings.isSaved}/> 
    </Card.Header>
    <Accordion.Collapse eventKey={props.ticketTypeKey}>
      <Card.Body>
        <TicketTypeForm handleSubmit={handleSubmit} onSubmit={onSubmit} locked={props.settings.isLocked}
                    childProps={childProps} saved={props.settings.isSaved} showSavedBanner={props.settings.showSavedBanner}
                    handleRemove={handleRemove}/>
      </Card.Body>
    </Accordion.Collapse>
  </Card>

}

export default TicketType