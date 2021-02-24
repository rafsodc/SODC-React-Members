import React from "react";
import useFormBuilder from "../../ReactHelpers/Forms/useFormBuilder";
import {loginFormSchema} from "../../Forms/schema";
import LoginForm from "./LoginForm";
import Aux from "../../ReactHelpers/hoc/Aux";
import * as actionTypes from "../../store/actions";
import httpServiceBuilder from "../../services/http/httpServiceBuilder";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router";

const Login = () => {
  const user = useSelector(state => state.user)
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

  const httpService = httpServiceBuilder(formName, user.token)

  const onSubmit = () => {
    dispatch({
      type:actionTypes.ALERT_CLOSE_UNSTICKY
    });
    dispatch({
      type:actionTypes.FORM_LOCK,
      form: formName
    });
    httpService.login(JSON.stringify(data.fields))
    .then((response) => {
      // If we get a valid response
      dispatch({
        type: actionTypes.FORM_CLEAR,
        form: formName,
      })
      dispatch({
        type: actionTypes.USER_AUTHENTICATE,
        iri: response.headers.location,
        token: response.data.token
      })
    }).catch(() => {})
    .finally(() => {
      dispatch({
        type: actionTypes.FORM_UNLOCK,
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

  const content = user.authenticated ? <Redirect to={"/"} /> : <LoginForm handleSubmit={handleSubmit} onSubmit={onSubmit} onRecaptcha={onRecaptcha} locked={data.locked}
                 childProps={childProps} /> ;

  return <Aux>
    <h1>Login</h1>
    {content}
  </Aux>;

};

export default Login;