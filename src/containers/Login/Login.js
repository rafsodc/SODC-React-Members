import React from "react";
import useFormBuilder from "../../ReactHelpers/Forms/useFormBuilder";
import {loginFormSchema} from "../../ReactHelpers/Forms/schema";
import LoginForm from "./LoginForm";
import Aux from "../../ReactHelpers/hoc/Aux";

const Login = () => {

  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    onChange,
    onRecaptcha,
    data
  } = useFormBuilder(loginFormSchema, 'login')

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