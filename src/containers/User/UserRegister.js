import React, { useEffect } from 'react'
import useFormBuilder from '../../hooks/Forms/useFormBuilder'
import { userFormSchema } from '../../utils/forms/schema'
import { useDispatch, useSelector } from 'react-redux'
import { clearUnstickyAlerts, setUserField, submitUserForm } from '../../store/actions'
import Aux from '../../hoc/Aux'
import UserForm from './UserForm'
import { clearUser, errorFlag } from '../../store/actions/'
import FormSubmitted from '../../components/Form/FormSubmitted'
import { onCaptchaSubmit } from '../../store/helpers/formActions'

const UserRegister = () => {

  const dispatch = useDispatch()
  const {form, settings} = useSelector(state => state.userReducer)
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
    dispatch(setUserField(event.target.name, event.target.value ))
  }

  const onRecaptcha = (value) => {
    dispatch(setUserField('captcha', value ))
    dispatch(errorFlag('captcha', value === null))
  }

  const onSubmit = () => dispatch([
    clearUnstickyAlerts(),
    onCaptchaSubmit(submitUserForm, form)
  ])

  const childProps = {
    errors: errors,
    data: form,
    onChange: onChange,
    ref: register
  }

  return (
    <Aux>
      <h1>Create Account</h1>
      <p>Please enter your details below for an account to be created. Your account will then be approved by the
        Secretary.</p>
      {/* <Load loading={!formState.isLoaded}> */}
      <FormSubmitted saved={settings.isSaved}>
        <UserForm handleSubmit={handleSubmit} onSubmit={onSubmit} locked={settings.isLocked}
                  childProps={childProps} saved={settings.isSaved}
                  onRecaptcha={onRecaptcha} captchaError={captchaError} register={true}/>
      </FormSubmitted>
      {/* </Load>  */}
    </Aux>
  )

}

export default UserRegister