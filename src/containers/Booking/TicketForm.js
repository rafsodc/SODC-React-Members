import React from "react";
import {Button, Form} from "react-bootstrap";
import FormElement from "../../ReactUI/Forms/FormElement";
import "../../ReactUI/Forms/Form.css"

const TicketForm = (props) => (

  <Form onSubmit={props.handleSubmit(props.onSubmit)} disabled={"disabled"}>
    <fieldset disabled={props.locked && "disabled"}>
      <Form.Group controlId="formOwner">
        <FormElement type="email" placeholder="Owner's Email address" label="Owner's Email Address" name="email" {...props.childProps} />
      </Form.Group>
      <Form.Group controlId="formRank">
        <FormElement type="text" placeholder="Rank" label="Rank" name="rank" {...props.childProps}/>
        <FormElement type="text" placeholder="First Name" label="First Name" name="firstName" {...props.childProps}/>
        <FormElement type="text" placeholder="Last Name" label="Last Name" name="lastName" {...props.childProps}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>


    </fieldset>
  </Form>

);

export default TicketForm;