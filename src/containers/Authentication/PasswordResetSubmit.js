import React, { useEffect } from 'react'
import useFormBuilder from '../../hooks/Forms/useFormBuilder'
import { passwordResetSubmitFormSchema } from '../../utils/forms/schema'
import PasswordResetSubmitForm from './PasswordResetSubmitForm'
import Aux from '../../hoc/Aux'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { setPasswordResetSubmitField, submitPasswordReset } from '../../store/actions'
import Load from '../../components/Loading/Load'
import { checkPasswordResetToken } from '../../store/actions/authentication'

const PasswordResetSubmit = (props) => {

  const dispatch = useDispatch()
  const formName = 'passwordResetSubmit'
  const {form, settings} = useSelector(state => state.passwordResetSubmitFormReducer)
  const state = useSelector(state => state.passwordResetSubmitReducer)

  const { token } = useParams()

  useEffect(() => {
    dispatch(checkPasswordResetToken(token))
  }, [dispatch, token])

  const {
    register,
    errors,
    handleSubmit,
  } = useFormBuilder(passwordResetSubmitFormSchema)

  const onChange = (event) => {
    dispatch(setPasswordResetSubmitField([event.target.name], event.target.value))
  }

  const onSubmit = () => {
    //console.log(formState.fields);
    // const data = {
    //   password: formState.fields.password
    // }
    dispatch(submitPasswordReset(token, form))
    //dispatch(onCaptchaSubmit(passwordResetRequest, formState.fields));
  }

  const childProps = {
    form: formName,
    errors: errors,
    data: form,
    onChange: onChange,
    ref: register
  }

  return <Load loading={!state.loaded} notFound={!state.valid}>
    <h1>Password Reset</h1>

    {settings.isHidden ? '' : <Aux><p>Please enter a new password.</p>
      <PasswordResetSubmitForm handleSubmit={handleSubmit} onSubmit={onSubmit} locked={settings.isLocked}
                               childProps={childProps}/></Aux>}
  </Load>
}

export default PasswordResetSubmit