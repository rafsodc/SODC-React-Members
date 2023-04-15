import React, { useEffect } from 'react'
import useFormBuilder from '../../hooks/Forms/useFormBuilder'
import { userFormSchema } from '../../services/forms/schema'
import { useDispatch, useSelector } from 'react-redux'
import { clearUnstickyAlerts, setUserField, submitUserForm } from '../../store/actions'
import Aux from '../../hoc/Aux'
import UserForm from './UserForm'
import { clearUser, errorFlag } from '../../store/actions/'
import FormSubmitted from '../Form/FormSubmitted'
import { onCaptchaSubmit } from '../../store/helpers/formActions'

const UserRegister = () => {

  const dispatch = useDispatch()
  const formState = useSelector(state => state.userReducer)
  const captchaError = useSelector(state => state.errorReducer.captcha)

  useEffect(() => {
    return () => dispatch(clearUser())
  }, [dispatch])

  const {
    register,
    errors,
    handleSubmit,
  } = useFormBuilder(() => userFormSchema(false))

  const onChange = (event) => {
    dispatch(setUserField({ [event.target.name]: event.target.value }))
  }

  const onRecaptcha = (value) => {
    dispatch(setUserField({ captcha: value }))
    dispatch(errorFlag('captcha', value === null))
  }

  const onSubmit = () => dispatch([
    clearUnstickyAlerts(),
    onCaptchaSubmit(submitUserForm, formState.fields)
  ])

  const childProps = {
    errors: errors,
    data: formState.fields,
    onChange: onChange,
    ref: register
  }

  return (
    <Aux>
      <h1>Create Account</h1>
      <p>Please enter your details below for an account to be created. Your account will then be approved by the
        Secretary.</p>
      {/* <Load loading={!formState.isLoaded}> */}
      <FormSubmitted saved={formState.saved}>
        <UserForm handleSubmit={handleSubmit} onSubmit={onSubmit} locked={formState.locked}
                  childProps={childProps} saved={formState.saved}
                  onRecaptcha={onRecaptcha} captchaError={captchaError} recaptcha={true}/>
      </FormSubmitted>
      {/* </Load>  */}
    </Aux>
  )

}

export default UserRegister