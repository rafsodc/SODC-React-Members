import React, { useEffect } from 'react'
import useFormBuilder from '../../hooks/Forms/useFormBuilder'
import { userFormSchema } from '../../utils/forms/schema'
import { useDispatch, useSelector } from 'react-redux'
import { setUserField, submitUserForm } from '../../store/actions'
import Aux from '../../hoc/Aux'
import { useParams } from 'react-router'
import UserForm from './UserForm'
import { clearUser, loadUser } from '../../store/actions/user'
import Load from '../../components/Loading/Load'

const UserEdit = () => {

  const dispatch = useDispatch()
  const {form, settings} = useSelector(state => state.userReducer)
  const authState = useSelector(state => state.authenticationReducer)

  let { uuid } = useParams()

  uuid = uuid === undefined ? authState.token_data.uuid : uuid

  useEffect(() => {
    dispatch(loadUser(uuid))
    return () => dispatch(clearUser())
  }, [dispatch, uuid])

  const {
    register,
    errors,
    handleSubmit,
  } = useFormBuilder(userFormSchema)

  const onChange = (event) => {
    dispatch(setUserField(event.target.name, event.target.value ))
  }

  const onSubmit = () => {
    dispatch(submitUserForm(form, settings.location))
  }

  const childProps = {
    errors: errors,
    data: form,
    onChange: onChange,
    ref: register
  }

  return (
    <Aux>
      <h1>Account Details</h1>
      <Load loading={!settings.isLoaded}>
        <UserForm handleSubmit={handleSubmit} onSubmit={onSubmit} locked={settings.isLocked}
                  childProps={childProps} saved={settings.isSaved}/>
      </Load>
    </Aux>
  )

}

export default UserEdit