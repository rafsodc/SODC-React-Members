import { passwordResetSubmitFormSchema } from '../../utils/forms/schema'
import { addElement, blankObject, removeElementById, setParam, updateItemOrArray, updateObject } from './utility'
import merge from 'merge'

/**
 * Adds a form to an array of forms
 * @param state Current state
 * @param action Current action data
 * @param newElement New element to be added
 * @returns {*}
 */
export const addForm = (state, action, newElement) => {
  if (action.fields !== null) {
    newElement = updateObject(newElement, { fields: action.fields })
  }
  // Set the key on the newElement
  const el = updateObject(newElement, { id: action.id, location: action.location, saved: action.saved })
  // Update state
  return addElement(state, el)
}

/**
 * Removes a form to an array of forms
 * @param state Current state
 * @param action Current action data
 * @returns {*}
 */
export const removeForm = (state, action) => {
  return removeElementById(state, action.id)
}

/**
 * Sets the data fields for a particular form
 * @param state
 * @param action
 * @returns {*}
 */
export const setField = (state, action) => {
  const setSingle = (obj = state) => {
    const fields = updateObject(obj.fields, action.data)
    return updateObject(obj, { fields: fields, saved: false })
  }
  return updateItemOrArray(state, action, setSingle)
}

/**
 * Clears the form
 * @param state
 * @param action
 * @returns {*}
 */
export const clearForm = (state, action) => {
  const setSingle = (obj = state) => updateObject(obj, { fields: blankObject(obj.fields) })

  return updateItemOrArray(state, action, setSingle)
}

export const formSettings = {
  isLocked: false,
  isHidden: false,
  isSaved: false,
  isLoaded: false,
  location: null,
}

/**
 * Default reducer object for forms
 */
export const formReducerObject = (actionType) => ({
  [actionType.SET_FIELD]: {fn: setValue, args: ['form']},
  [actionType.SET_LOCKED]: {fn: setValue, args: ['settings', 'isLocked']},
  [actionType.SET_HIDDEN]: {fn: setValue, args: ['settings', 'isHidden']},
  [actionType.SET_SAVED]: {fn: setValue, args: ['settings', 'isSaved']},
  [actionType.SET_LOADED]: {fn: setValue, args: ['settings', 'isLoaded']},
  [actionType.SET_LOCATION]: {fn: setValue, args: ['settings', 'location']},
  [actionType.CLEAR]: clearForm
})

//// New Reducers Below

export const setValue = (state, action, section, property = null) => {
  // Store value and id from action
  const {value, id} = action

  // If property isn't set by function params, get it from action
  property = property === null ? action.property : property

  // Build data object
  let data = {}
  if(id === null) {
    data = {
      [section]: {[property]: value}
    }
  }
  else {
    data = {
      [section]: {[id]: {[property]: value}}
    }
  }

  // Merge data object with state
  return merge.recursive(true, state, data) 
}


// const formReducers = {
//   setFormField: setFormField
// }

// export default formReducers