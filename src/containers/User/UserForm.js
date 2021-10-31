import React from "react";
import {Button, Form} from "react-bootstrap";
import FormElement from "../../ReactUI/Forms/FormElement";
import FormSaved from "../../ReactUI/Forms/FormSaved";
import FormRecaptcha from "../../ReactUI/Forms/FormRecaptcha";

const UserForm = (props) => {

  const optionsYesNo = [{value: true, description: "Yes"}, {value: false, description: "No"}];
  const recaptcha = props.recaptcha ? <FormRecaptcha onRecaptcha={props.onRecaptcha} error={props.captchaError}/> : "";

  return <Form onSubmit={props.handleSubmit(props.onSubmit)} disabled={"disabled"}>
    <fieldset disabled={props.locked && "disabled"}>
      <Form.Group>
        <FormElement type="input" placeholder="Enter first name" label="First Name" name="firstName" {...props.childProps}/>
        <FormElement type="input" placeholder="Enter last name" label="Last Name" name="lastName" {...props.childProps}/>
        <FormElement type="input" placeholder="Enter post nominals" label="Post Nominals" name="postNominals" {...props.childProps}/>
        <FormElement type="input" placeholder="Enter service number" label="Service Number" name="serviceNumber" {...props.childProps}/>
        <FormElement type="rankTypeAhead" placeholder="Rank" label="Rank" name="rank" {...props.childProps} />
        <FormElement type="input" placeholder="Enter email address" label="Email" name="email" {...props.childProps}/>
        <FormElement type="input" placeholder="Enter phone number" label="Phone Number" name="phoneNumber" {...props.childProps}/>
        <FormElement type="input" placeholder="Enter mobile number" label="Mobile Number" name="mobileNumber" {...props.childProps}/>
        <FormElement type="input" placeholder="Enter MODNet email address" label="MODNet Email" name="modnetEmail" {...props.childProps}/>
        <FormElement type="textarea" placeholder="Enter service history" label="Service History" name="workDetails" {...props.childProps}/>
        <FormElement type="select" label="Share contact details with other members?" name="isShared" options={optionsYesNo} {...props.childProps}/>
        <FormElement type="password" placeholder="Enter new password (leave blank to keep existing password)" label="Update password:" name="password" {...props.childProps} />
        <FormElement type="password" placeholder="Confirm new password (leave blank to keep existing password)" label="Confirm password:" name="passwordConfirm" {...props.childProps} />
        {recaptcha}
      </Form.Group>

      <Button variant="primary" type="submit">
        Save
      </Button>
      <FormSaved saved={props.saved} />

    </fieldset>
  </Form>

};

export default UserForm;