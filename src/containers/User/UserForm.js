import React from 'react'
import { Button, Form } from 'react-bootstrap'
import FormElement from '../../components/Form/FormElement'
import FormSaved from '../../components/Form/FormSaved'
import FormRecaptcha from '../../components/Form/FormRecaptcha'

const UserForm = (props) => {

  const optionsYesNo = [{ value: true, description: 'Yes' }, { value: false, description: 'No' }]
  const recaptcha = props.register ? <FormRecaptcha onRecaptcha={props.onRecaptcha} error={props.captchaError}/> : ''
  const passwordText = props.register ? "password" : "new password (leave blank to keep existing password)"
  const communications = props.register ? '' : <FormElement type="select" label="Receive club-wide communications?" name="isSubscribed" options={optionsYesNo} {...props.childProps}/> 

  return <Form onSubmit={props.handleSubmit(props.onSubmit)} disabled={'disabled'}>
    <fieldset disabled={props.locked && 'disabled'}>
      <Form.Group>
        <FormElement type="input" placeholder="Enter first name" label="First Name"
                     name="firstName" {...props.childProps}/>
        <FormElement type="input" placeholder="Enter last name" label="Last Name"
                     name="lastName" {...props.childProps}/>
        <FormElement type="input" placeholder="Enter post nominals" label="Post Nominals"
                     name="postNominals" {...props.childProps}/>
        <FormElement type="input" placeholder="Enter service number" label="Service Number"
                     name="serviceNumber" {...props.childProps}/>
        <FormElement type="rankTypeAhead" placeholder="Rank" label="Rank" name="rank" {...props.childProps} />
        <FormElement type="input" placeholder="Enter email address" label="Email" name="email" {...props.childProps}/>
        <FormElement type="input" placeholder="Enter phone number" label="Phone Number"
                     name="phoneNumber" {...props.childProps}/>
        <FormElement type="input" placeholder="Enter mobile number" label="Mobile Number"
                     name="mobileNumber" {...props.childProps}/>
        <FormElement type="input" placeholder="Enter MODNet email address" label="MODNet Email"
                     name="modnetEmail" {...props.childProps}/>
        <FormElement type="textarea" placeholder="Enter service history" label="Service History"
                     name="workDetails" {...props.childProps}/>
        <FormElement type="select" label="Allow members to see your contact details?" name="isShared"
                     options={optionsYesNo} {...props.childProps}/>
        {communications}
        <FormElement type="password" placeholder={"Enter " + passwordText}
                     label="Password:" name="password" {...props.childProps} />
        <FormElement type="password" placeholder={"Confirm " + passwordText}
                     label="Confirm password:" name="passwordConfirm" {...props.childProps} />
        {recaptcha}
      </Form.Group>

      <Button variant="primary" type="submit">
        Save
      </Button>
      <FormSaved saved={props.saved}/>

    </fieldset>
  </Form>

}

export default UserForm