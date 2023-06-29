import {
  clearForm,
  setFormField,
  setFormHidden,
  setFormIsLoaded,
  setFormLocked,
  submitForm
} from '../helpers/formActions'
import actionTypes from '../actionTypes'
import paths from '../paths'
import axios from '../../utils/axios/axios'

export const setUserField = (property, value) => setFormField(actionTypes.user.NAME, property, value)
export const setUserLocked = (isLocked) => setFormLocked(actionTypes.user.NAME, isLocked)
export const setUserHidden = (isHidden) => setFormHidden(actionTypes.user.NAME, isHidden)
export const setUserIsLoaded = (isLoaded) => setFormIsLoaded(actionTypes.user.NAME, isLoaded)
//export const submitUserForm = (data, location) => submitForm(actionTypes.user.NAME, data, null, location);

export const submitUserForm = (data, location = null) => {
  data.isShared = String(data.isShared) === 'true'
  return submitForm(actionTypes.user.NAME, data, null, location)
}

export const loadUser = (id) => dispatch => {
  const path = paths.user.GET_COLLECTION + '/' + id
  axios.get(path).then((response) => dispatch([
    setUserField(response.data),
    setUserIsLoaded(true)
  ]))
}

export const clearUser = () => clearForm(actionTypes.user.NAME)

/*export const setUser = (user) => ({
  type: actionTypes.user.SET_FIELD,
  data: user
});*/

export default { loadUser, setUserField, setUserLocked, setUserHidden }
