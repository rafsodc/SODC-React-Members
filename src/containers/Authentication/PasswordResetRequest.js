import React from "react";
import useFormBuilder from "../../hooks/Forms/useFormBuilder";
import {passwordResetRequestFormSchema} from "../../services/forms/schema";
import PasswordResetRequestForm from "./PasswordResetRequestForm";
import Aux from "../../hoc/Aux";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {passwordResetRequest, setPasswordResetRequestField, errorFlag} from "../../store/actions";
import { onCaptchaSubmit } from "../../store/helpers/formActions";

const PasswordResetRequest = (props) => {

  const dispatch = useDispatch();
  const formName = 'passwordResetRequest';
  const formState = useSelector(state => state.passwordResetRequestFormReducer)
  const captchaError = useSelector(state => state.errorReducer.captcha);

  const {
    register,
    errors,
    handleSubmit,
  } = useFormBuilder(passwordResetRequestFormSchema)

  const onChange = (event) => {  
    dispatch(setPasswordResetRequestField({[event.target.name]: event.target.value}));
  }

  const onRecaptcha = (value) => {
    dispatch(setPasswordResetRequestField({captcha: value}));
    dispatch(errorFlag('captcha', value === null))
  }

  //const onSubmit = () => dispatch(passwordResetRequest(formState.fields));
  const onSubmit = () => {
    console.log(formState.fields);
    dispatch(onCaptchaSubmit(passwordResetRequest, formState.fields));
  }

  const childProps = {
    form: formName,
    errors: errors,
    data: formState.fields,
    onChange: onChange,
    ref: register
  }

  return <Aux>
    <h1>Password Reset</h1>
    <PasswordResetRequestForm handleSubmit={handleSubmit} onSubmit={onSubmit} onRecaptcha={onRecaptcha} locked={formState.locked}
               childProps={childProps} captchaError={captchaError}/>
  </Aux>;

};

export default PasswordResetRequest;