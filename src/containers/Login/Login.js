import React from "react";
import useFormBuilder from "../../ReactHelpers/Forms/useFormBuilder";
import {loginFormSchema} from "../../Forms/schema";
import LoginForm from "./LoginForm";
import Aux from "../../ReactHelpers/hoc/Aux";
import * as actionTypes from "../../store/actions";
import httpServices from "../../services/http/httpServices";
import {useDispatch} from "react-redux";

const Login = () => {

  const formName = 'login';
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    errors,
    onChange,
    onRecaptcha,
    data
  } = useFormBuilder(loginFormSchema, formName)

  const httpService = httpServices[formName];

  const onSubmit = () => {
    httpService.create(JSON.stringify(data.fields))
    .then(() => {
      // If we get a valid response
      dispatch({
        type: actionTypes.ALERT_OPEN,
        alert: {
          variant: 'success',
          dismissible: false,
          heading: "Form Submitted",
          message: "Form successfully submitted."
        },
        sticky: false,
      });
      dispatch({
        type: actionTypes.FORM_HIDE,
        form: formName
      })
    });
  }

  const childProps = {
    form: 'login',
    errors: errors,
    data: data.fields,
    onChange: onChange,
    ref: register
  }

  const content = <LoginForm handleSubmit={handleSubmit} onSubmit={onSubmit} onRecaptcha={onRecaptcha} locked={data.locked}
                 childProps={childProps} />;

  return <Aux>
    <h1>Login</h1>
    {content}
  </Aux>;

};

export default Login;