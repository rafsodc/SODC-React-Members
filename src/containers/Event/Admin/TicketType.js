import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import useFormBuilder from '../../../hooks/Forms/useFormBuilder'
import { ticketTypeFormSchema } from '../../../utils/forms/schema'
import { useDispatch } from 'react-redux'
import { Accordion, Card } from 'react-bootstrap'
import SavedBadge from '../../Booking/SavedBadge'
import {
  deleteTicketType,
  setTicketTypeField,
  setTicketTypeSaved,
  setTicketTypeSavedBanner,
  submitTicketTypeForm
} from '../../../store/actions/ticketTypes'
import { setAccordion } from '../../../store/actions/layout'
import TicketTypeForm from './TicketTypeForm'

const TicketType = ({
  form,
  settings,
  event,
  ticketTypeKey,
  handleHeaderClick
}) => {
  const dispatch = useDispatch()

  const {
    register,
    errors,
    handleSubmit,
  } = useFormBuilder(() => ticketTypeFormSchema())

  const onChange = useCallback((event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    dispatch(setTicketTypeField(event.target.name, value, form.uuid))
    dispatch(setTicketTypeSaved(false, form.uuid))
    dispatch(setTicketTypeSavedBanner(false, form.uuid))
  }, [dispatch, form.uuid])

  const onSubmit = useCallback(() => {
    dispatch(submitTicketTypeForm(form, settings.location, event))
  }, [dispatch, form, settings.location, event])

  const handleRemove = useCallback(() => {
    dispatch([
      deleteTicketType(form.uuid, settings.location),
      setAccordion(0)
    ])
  }, [dispatch, form.uuid, settings.location])

  const childProps = {
    errors,
    data: form,
    onChange,
    ref: register
  }

  return (
    <Card>
      <Card.Header onClick={handleHeaderClick}>
        {form.description}
        <SavedBadge saved={settings.isSaved} />
      </Card.Header>
      <Accordion.Collapse eventKey={ticketTypeKey}>
        <Card.Body>
          <TicketTypeForm
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            locked={settings.isLocked}
            childProps={childProps}
            saved={settings.isSaved}
            showSavedBanner={settings.showSavedBanner}
            handleRemove={handleRemove}
          />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  )
}

TicketType.propTypes = {
  form: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  event: PropTypes.object,
  ticketTypeKey: PropTypes.any,
  handleHeaderClick: PropTypes.func
}

export default TicketType