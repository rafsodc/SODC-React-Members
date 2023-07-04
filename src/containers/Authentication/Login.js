import React from 'react'
import useFormBuilder from '../../hooks/Forms/useFormBuilder'
import { loginFormSchema } from '../../utils/forms/schema'
import LoginForm from './LoginForm'
import Aux from '../../hoc/Aux'
import { useDispatch, useSelector } from 'react-redux'
import { login, setLoginField } from '../../store/actions/'
import { NavLink } from 'react-router-dom'

const Login = (props) => {
  const formName = 'login'
  const dispatch = useDispatch()
  const {form, settings} = useSelector(state => state.loginFormReducer)

  const {
    register,
    errors,
    handleSubmit,
  } = useFormBuilder(loginFormSchema)

  const onChange = (event) => {
    dispatch(setLoginField(event.target.name, event.target.value))
  }

  const onRecaptcha = (value) => {
    dispatch(setLoginField('captcha', value ))
    //dispatch(errorFlag('captcha', value === null))
  }

  const onSubmit = () => dispatch(login(form))

  const childProps = {
    form: formName,
    errors: errors,
    data: form,
    onChange: onChange,
    ref: register
  }

  console.log(settings)

  return <Aux>
    <h1>Login</h1>
    <LoginForm handleSubmit={handleSubmit} onSubmit={onSubmit} onRecaptcha={onRecaptcha} locked={settings.isLocked}
               childProps={childProps}/>
    <br/><NavLink to={'/forgot-password'}>Request Password Reset</NavLink>
  </Aux>

}

export default Login