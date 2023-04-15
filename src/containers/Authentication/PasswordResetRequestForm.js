import React from 'react'
import { Button, Form } from 'react-bootstrap'
import FormElement from '../../components/Form/FormElement'
import FormRecaptcha from '../../components/Form/FormRecaptcha'

const PasswordResetRequestForm = (props) => (

  <Form onSubmit={props.handleSubmit(props.onSubmit)} disabled={'disabled'}>
    <fieldset disabled={props.locked && 'disabled'}>
      <Form.Group controlId="formEmail">
        <FormElement type="input" placeholder="Enter email address" label="Email" name="email" {...props.childProps}/>
      </Form.Group>
      <FormRecaptcha onRecaptcha={props.onRecaptcha} error={props.captchaError}/>

      <Button variant="primary" type="submit">
        Submit
      </Button>


    </fieldset>
  </Form>

)

export default PasswordResetRequestForm