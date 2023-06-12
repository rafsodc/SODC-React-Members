import React from 'react'
import { Button, Form } from 'react-bootstrap'
import FormElement from './FormElement'
import FormSaved from './FormSaved'
import FormRecaptcha from './FormRecaptcha'

const EventForm = (props) => {

  return <Form onSubmit={props.handleSubmit(props.onSubmit)} disabled={'disabled'}>
    <fieldset disabled={props.locked && 'disabled'}>
      <Form.Group>
        <FormElement type="input" placeholder="Enter event title" label="Title"
                     name="title" {...props.childProps}/>
        <FormElement type="date" placeholder="Enter event date" label="Event Date"
                     name="date" {...props.childProps}/>
        <FormElement type="date" placeholder="Enter event data" label="Booking Open Date"
                     name="bookingOpen" {...props.childProps}/>
        <FormElement type="date" placeholder="Enter event data" label="Booking Close Date"
                     name="bookingClose" {...props.childProps}/>
        <FormElement type="input" placeholder="Enter event venue" label="Venue"
                     name="venue" {...props.childProps}/>
        <FormElement type="input" placeholder="Enter event description" label="Description"
                     name="description" {...props.childProps}/>
        <FormElement type="input" placeholder="Enter event principal speaker" label="Principal Speaker"
                     name="principalSpeaker" {...props.childProps}/>
        <FormElement type="input" placeholder="Enter event sponsors" label="Sponsor(s)"
                     name="sponsor" {...props.childProps}/>

      </Form.Group>

      <Button variant="primary" type="submit">
        Save
      </Button>
      <FormSaved saved={props.saved}/>

    </fieldset>
  </Form>

}

export default EventForm