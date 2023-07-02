import React from 'react'
import useFormBuilder from '../../hooks/Forms/useFormBuilder'
import { passwordResetRequestFormSchema } from '../../utils/forms/schema'
import PasswordResetRequestForm from './PasswordResetRequestForm'
import Aux from '../../hoc/Aux'
import { useDispatch, useSelector } from 'react-redux'
import { errorFlag, passwordResetRequest, setPasswordResetRequestField } from '../../store/actions'
import { onCaptchaSubmit } from '../../store/helpers/formActions'

const PasswordResetRequest = (props) => {

  const dispatch = useDispatch()
  const formName = 'passwordResetRequest'
  const {form, settings} = useSelector(state => state.passwordResetRequestFormReducer)
  const captchaError = useSelector(state => state.errorReducer.captcha)

  const {
    register,
    errors,
    handleSubmit,
  } = useFormBuilder(passwordResetRequestFormSchema)

  const onChange = (event) => dispatch(setPasswordResetRequestField([event.target.name], event.target.value))

  const onRecaptcha = (value) => {
    dispatch(setPasswordResetRequestField('captcha', value))
    dispatch(errorFlag('captcha', value === null))
  }

  //const onSubmit = () => dispatch(passwordResetRequest(formState.fields));
  const onSubmit = () => dispatch(onCaptchaSubmit(passwordResetRequest, form))

  const childProps = {
    form: formName,
    errors: errors,
    data: form,
    onChange: onChange,
    ref: register
  }

  return <Aux>
    <h1>Password Reset</h1>
    <p>Please enter your email address. If that email address matches one on our records, a password reset link will be
      sent to that email address. Please be sure to check you junk mail folders. If you do not receive an email, please
      email <a href="mailto:admin@sodc.net">admin@sodc.net</a>.</p>
    <PasswordResetRequestForm handleSubmit={handleSubmit} onSubmit={onSubmit} onRecaptcha={onRecaptcha}
                              locked={settings.isLocked}
                              childProps={childProps} captchaError={captchaError}/>
  </Aux>

}

export default PasswordResetRequest