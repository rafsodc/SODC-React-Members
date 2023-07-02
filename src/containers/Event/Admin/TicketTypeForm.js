import React from 'react'
import { Button, Form } from 'react-bootstrap'
import FormElement from '../../../components/Form/FormElement'
import '../../../components/Form/Form.css'

const TicketTypeForm = (props) => {

  return <Form onSubmit={props.handleSubmit(props.onSubmit)} disabled={'disabled'}>
    <fieldset disabled={props.locked && 'disabled'}>
      <Form.Group>
        <FormElement type="input" placeholder="Description" label="Description" name="description" {...props.childProps}/>

        <FormElement type="switch" placeholder="Dinner" label="Dinner" name="dinner" {...props.childProps}/>
        <FormElement type="switch" placeholder="Symposium" label="Symposium" name="symposium" {...props.childProps}/>
        <FormElement type="switch" placeholder="Guest" label="Guest" name="guest" {...props.childProps}/>
        <FormElement type="switch" placeholder="Serving" label="Serving" name="serving" {...props.childProps}/>
        <FormElement type="switch" placeholder="Student" label="Student" name="student" {...props.childProps}/>
        <FormElement type="switch" placeholder="Retired" label="Retired" name="retired" {...props.childProps}/>
        <FormElement type="input" placeholder="Price" label="Price" name="price" {...props.childProps}/>
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

export default TicketTypeForm