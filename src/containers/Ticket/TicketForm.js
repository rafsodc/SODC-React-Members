import React from 'react'
import { Button, Form } from 'react-bootstrap'
import FormElement from '../../ReactUI/Forms/FormElement'
import '../../ReactUI/Forms/Form.css'

const TicketForm = (props) => {

  const formatTicketTypes = (ticketTypes) => ticketTypes.map((ticket) => ({
    value: ticket['@id'],
    description: ticket.description + ' - £' + ticket.price
  }))

  return <Form onSubmit={props.handleSubmit(props.onSubmit)} disabled={'disabled'}>
    <fieldset disabled={props.locked && 'disabled'}>
      <Form.Group>
        <FormElement type="select" placeholder="Select Ticket" label="Ticket" name="ticketType" {...props.childProps}
                     options={formatTicketTypes(props.ticketOptions)} disabled={props.paid}/>
        <FormElement type="input" placeholder="Rank" label="Rank" name="rank" {...props.childProps}/>
        <FormElement type="input" placeholder="First Name" label="First Name" name="firstname" {...props.childProps}/>
        <FormElement type="input" placeholder="Last Name" label="Last Name" name="lastname" {...props.childProps}/>
        <FormElement type="input" placeholder="Dietary Requirements" label="Dietary Requirements"
                     name="dietary" {...props.childProps}/>
        <FormElement type="userTypeAhead" placeholder="Seating Preferences" label="Seating Preferences"
                     name="seatingPreferences" {...props.childProps} />


      </Form.Group>

      <Button variant="primary" type="submit" disabled={props.saved && 'disabled'}>
        Save
      </Button>

      <Button variant="danger" onClick={props.handleRemove} disabled={props.childProps.data.paid}>
        Remove
      </Button>


    </fieldset>
  </Form>
}

export default TicketForm