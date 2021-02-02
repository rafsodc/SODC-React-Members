import React from "react";
import {Button, Form} from "react-bootstrap";
import FormElement from "../../UI/Forms/FormElement";
import ReCAPTCHA from "react-google-recaptcha";
import FormRecaptcha from "../../UI/Forms/FormRecaptcha";

const ContactForm = ( props ) => (

  <Form onSubmit={props.handleSubmit(props.onSubmit)} disabled={"disabled"}>
    <fieldset disabled={props.locked && "disabled"}>
      <Form.Group controlId="formName">
        <FormElement type="text" placeholder="Enter name" label="Name" name="name" {...props.childProps}/>
      </Form.Group>
      <Form.Group controlId="formEmail">
        <FormElement type="text" placeholder="Enter email address" label="Email" name="email" {...props.childProps}/>
      </Form.Group>
      <Form.Group controlId="formSubject">
        <FormElement type="text" placeholder="Enter subject" label="Subject" name="subject" {...props.childProps}/>
      </Form.Group>
      <Form.Group controlId="formMessage">
        <FormElement as="textarea" rows={5} placeholder="Enter message" label="Message" name="message" {...props.childProps}/>
      </Form.Group>
      <FormRecaptcha onRecaptcha={props.onRecaptcha} error={props.captchaError}/>

      <Button variant="primary" type="submit" >
        Submit
      </Button>




    </fieldset>
  </Form>

);

export default ContactForm;