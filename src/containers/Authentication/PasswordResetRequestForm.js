import React from 'react'
import { Button, Form } from 'react-bootstrap'
import FormElement from '../../components/Form/FormElement'
import FormRecaptcha from '../../components/Form/FormRecaptcha'

const PasswordResetRequestForm = (props) => (

  <Form onSubmit={props.handleSubmit(props.onSubmit)} disabled={'disabled'}>
    <fieldset disabled={props.locked && 'disabled'}>
      <Form.Group controlId="formUsername">
        <FormElement type="input" placeholder="Enter username" label="Username" name="username" {...props.childProps}/>
      </Form.Group>
      <FormRecaptcha onRecaptcha={props.onRecaptcha} error={props.captchaError}/>

      <Button variant="primary" type="submit">
        Submit
      </Button>


    </fieldset>
  </Form>

)

export default PasswordResetRequestForm