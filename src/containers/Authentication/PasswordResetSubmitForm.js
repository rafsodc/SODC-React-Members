import React from "react";
import {Button, Form} from "react-bootstrap";
import FormElement from "../../ReactUI/Forms/FormElement";
import FormRecaptcha from "../../ReactUI/Forms/FormRecaptcha";

const PasswordResetSubmitForm = (props) => (

  <Form onSubmit={props.handleSubmit(props.onSubmit)} disabled={"disabled"}>
    <fieldset disabled={props.locked && "disabled"}>
      <Form.Group controlId="formPassword">
        <FormElement type="password" placeholder="Enter new password" label="Password" name="password" {...props.childProps}/>
      </Form.Group>
      <Form.Group controlId="formPasswordConfirm">
        <FormElement type="password" placeholder="Confirm new password" label="Confirm Password" name="passwordConfirm" {...props.childProps}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>


    </fieldset>
  </Form>

);

export default PasswordResetSubmitForm;