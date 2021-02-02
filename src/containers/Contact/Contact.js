import React from 'react';
import {contactFormSchema} from "../../ReactHelpers/Forms/schema";
import useFormBuilder from "../../ReactHelpers/Forms/useFormBuilder";
import ContactForm from "./ContactForm";
import ContactSub from "./ContactSub";
import Aux from "../../ReactHelpers/hoc/Aux";
import withErrorBoundary from "../../ReactHelpers/ErrorBoundaries/withErrorBoundary";
import "../../ReactUI/Forms/Form.css"

const Contact = () => {

  const {
    register,
    handleSubmit,
    errors,
    onCaptchaSubmit: onSubmit,
    onChange,
    onRecaptcha,
    data,
    captchaError
  } = useFormBuilder(contactFormSchema, 'contact')

  const childProps = {
    form: "contact",
    errors: errors,
    data: data.fields,
    onChange: onChange,
    ref: register
  }

  const content = data.hidden ?
    <ContactSub data={data.fields}/> :
    <ContactForm handleSubmit={handleSubmit} onSubmit={onSubmit} onRecaptcha={onRecaptcha} locked={data.locked}
                 childProps={childProps} captchaError={captchaError}/>;

  return <Aux>
    <h1>Contact Us</h1>
    {content}
  </Aux>;

};

export default withErrorBoundary(Contact);
