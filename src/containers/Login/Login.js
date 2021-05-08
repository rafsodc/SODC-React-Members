import React from "react";
import useFormBuilder from "../../hooks/Forms/useFormBuilder";
import {loginFormSchema} from "../../services/forms/schema";
import LoginForm from "./LoginForm";
import Aux from "../../hoc/Aux";
import {useDispatch, useSelector} from "react-redux";
import {loginSubmit, setLoginField} from "../../store/actions/";

const Login = (props) => {
  const formName = 'login';
  const dispatch = useDispatch();
  const formState = useSelector(state => state.authenticationReducer.form);

  const {
    register,
    errors,
    handleSubmit,
  } = useFormBuilder(loginFormSchema)

  const onChange = (event) => {
    dispatch(setLoginField({[event.target.name]: event.target.value}));
  }

  const onRecaptcha = (value) => {
    dispatch(setLoginField({captcha: value}));
    //dispatch(errorFlag('captcha', value === null))
  }

  const onSubmit = () => dispatch(loginSubmit(formState.fields));

  const childProps = {
    form: formName,
    errors: errors,
    data: formState.fields,
    onChange: onChange,
    ref: register
  }

  return <Aux>
    <h1>Login</h1>
    <LoginForm handleSubmit={handleSubmit} onSubmit={onSubmit} onRecaptcha={onRecaptcha} locked={formState.locked}
               childProps={childProps} />
  </Aux>;

};

export default Login;