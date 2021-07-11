import React from "react";
import {Button, Form} from "react-bootstrap";
import FormElement from "../../ReactUI/Forms/FormElement";
import "../../ReactUI/Forms/Form.css"

const LoginForm = (props) => (

  <Form onSubmit={props.handleSubmit(props.onSubmit)} disabled={"disabled"}>
    <fieldset disabled={props.locked && "disabled"}>
      <Form.Group controlId="formUsername">
        <FormElement type="email" placeholder="Email address" label="Email Address" name="email" {...props.childProps}/>
      </Form.Group>
      <Form.Group controlId="formPassword">
        <FormElement type="password" placeholder="Password" label="Password" name="password" {...props.childProps}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>


    </fieldset>
  </Form>

);

export default LoginForm;