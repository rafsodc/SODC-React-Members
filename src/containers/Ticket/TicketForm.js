import React from "react";
import {Button, Form} from "react-bootstrap";
import FormElement from "../../ReactUI/Forms/FormElement";
import "../../ReactUI/Forms/Form.css";

const TicketForm = (props) => {



  return <Form onSubmit={props.handleSubmit(props.onSubmit)} disabled={"disabled"}>
    <fieldset disabled={props.locked && "disabled"}>
      <Form.Group>
        <FormElement type="select" placeholder="Select Ticket" label="Ticket" name="ticketType" {...props.childProps} options={props.ticketOptions} />
        <FormElement type="text" placeholder="Rank" label="Rank" name="rank" {...props.childProps}/>
        <FormElement type="text" placeholder="First Name" label="First Name" name="firstname" {...props.childProps}/>
        <FormElement type="text" placeholder="Last Name" label="Last Name" name="lastname" {...props.childProps}/>
        <FormElement type="text" placeholder="Dietary Requirements" label="Dietary Requirements"
                     name="dietary" {...props.childProps}/>
      </Form.Group>

      <Button variant="primary" type="submit" disabled={props.saved && "disabled"}>
        Save
      </Button>

      <Button variant="danger" onClick={props.handleRemove}>
        Remove
      </Button>


    </fieldset>
  </Form>};

export default TicketForm;