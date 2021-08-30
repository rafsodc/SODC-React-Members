import React from "react";
import {Button, Form} from "react-bootstrap";
import FormElement from "../../ReactUI/Forms/FormElement";
import FormSaved from "../../ReactUI/Forms/FormSaved";

const UserForm = (props) => (

  <Form onSubmit={props.handleSubmit(props.onSubmit)} disabled={"disabled"}>
    <fieldset disabled={props.locked && "disabled"}>
      <Form.Group>
        <FormElement type="text" placeholder="Enter first name" label="First Name" name="firstName" {...props.childProps}/>
        <FormElement type="text" placeholder="Enter last name" label="Last Name" name="lastName" {...props.childProps}/>
        <FormElement type="text" placeholder="Enter post nominals" label="Post Nominals" name="postNominals" {...props.childProps}/>
        <FormElement type="text" placeholder="Enter service number" label="Service Number" name="serviceNumber" {...props.childProps}/>
        <FormElement type="rankTypeAhead" placeholder="Rank" label="Rank" name="rank" {...props.childProps} />
        <FormElement type="text" placeholder="Enter email address" label="Email" name="email" {...props.childProps}/>
        <FormElement type="text" placeholder="Enter phone number" label="Phone Number" name="phoneNumber" {...props.childProps}/>
        <FormElement type="text" placeholder="Enter mobile number" label="Mobile Number" name="mobileNumber" {...props.childProps}/>
        <FormElement type="text" placeholder="Enter MODNet email address" label="MODNet Email" name="modnetEmail" {...props.childProps}/>
      </Form.Group>
      {/* <Form.Group controlId="formIsShared">
        <FormElement type="text" label="Share Details" name="isShared" {...props.childProps}/>
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Save
      </Button>
      <FormSaved saved={props.saved} />

    </fieldset>
  </Form>

);

export default UserForm;