import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {contactFormSchema} from "../../services/forms/schema";
//import useFormBuilder from "../../ReactHelpers/Forms/useFormBuilder";
import useFormBuilder from "../../hooks/Forms/useFormBuilder";
import ContactForm from "./ContactForm";
import ContactSub from "./ContactSub";
import Aux from "../../hoc/Aux";
//import withErrorBoundary from "../../ReactHelpers/ErrorBoundaries/withErrorBoundary";
import {errorFlag, setContactField, setContactHidden, setContactLocked} from '../../store/actions'
import "../../ReactUI/Forms/Form.css"
import { submitContactForm } from '../../store/actions/contact';
//import httpServices from "../../services/http/httpServices";

const Contact = () => {

  const formName = 'contact';
  const dispatch = useDispatch();
  const formState = useSelector(state => state.contactReducer);

  const {
    register,
    handleSubmit,
    errors,
    //onCaptchaSubmit: onSubmit,
    //onChange,
    //onRecaptcha,
    //data,
    //captchaError
  } = useFormBuilder(contactFormSchema) //, formName, httpServices[formName])

  console.log(formState);

  const onChange = (event) => dispatch(setContactField({[event.target.name]: event.target.value}));
  const onSubmit = () => dispatch(submitContactForm(formState.fields));
  const onRecaptcha = (value) => {
    dispatch(setContactField({captcha: value}));
    dispatch(errorFlag('captcha', value === null));
  }

  // @todo - Form error flags should be part of form data
  //const captchaError = useSelector(state => state.errorReducer.captcha);

  const captchaError = false;

  const childProps = {
    form: formName,
    errors: errors,
    data: formState.fields,
    onChange: onChange,
    ref: register
  }

  const content = formState.saved ?
    <ContactSub data={formState.fields}/> :
    <ContactForm handleSubmit={handleSubmit} onSubmit={onSubmit} onRecaptcha={onRecaptcha} locked={formState.locked}
                 childProps={childProps} captchaError={captchaError}/>;

  return <Aux>
    <h1>Contact Us</h1>
    {content}
  </Aux>;

};

//export default withErrorBoundary(Contact);
export default Contact;