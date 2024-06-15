import {
  clearForm,
  setFormField,
  setFormHidden,
  setFormIsLoaded,
  setFormLocation,
  setFormLocked,
  submitForm
} from '../helpers/formActions'
import actionTypes from '../actionTypes'
import paths from '../paths'
import axios from '../../utils/axios/axios'
import { dataHandler } from '../helpers/utility'

export const setUserField = (property, value) => setFormField(actionTypes.user.NAME, property, value)
const setUser = (user) => ({
  type: actionTypes.user.SET_FORM,
  form: user,
})
export const setUserLocked = (isLocked) => setFormLocked(actionTypes.user.NAME, isLocked)
export const setUserHidden = (isHidden) => setFormHidden(actionTypes.user.NAME, isHidden)
export const setUserIsLoaded = (isLoaded) => setFormIsLoaded(actionTypes.user.NAME, isLoaded)
export const setUserLocation = (location) => setFormLocation(actionTypes.user.NAME, location)
//export const submitUserForm = (data, location) => submitForm(actionTypes.user.NAME, data, null, location);

export const submitUserForm = (data, location = null) => {
  data.isShared = String(data.isShared) === 'true'
  data.isSubscribed = String(data.isSubscribed) === 'true'
  return submitForm(actionTypes.user.NAME, data, null, location)
}

export const loadUser = (id) => dispatch => {
  const path = paths.user.GET_COLLECTION + '/' + id
  axios.get(path).then((response) => {
    const {location, data} = dataHandler(response.data);
    dispatch(setUser(data))
    dispatch(setUserLocation(location))
    dispatch(setUserIsLoaded(true))
  }).catch(error => {})
}

export const clearUser = () => clearForm(actionTypes.user.NAME)

/*export const setUser = (user) => ({
  type: actionTypes.user.SET_FIELD,
  data: user
});*/

export default { loadUser, setUserField, setUserLocked, setUserHidden }
