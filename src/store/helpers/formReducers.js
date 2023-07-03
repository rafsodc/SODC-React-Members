import { passwordResetSubmitFormSchema } from '../../utils/forms/schema'
import { addElement, blankObject, removeElementById, setParam, updateItemOrArray, updateObject } from './utility'
import merge from 'merge'
import { v4 } from 'uuid'

/**
 * Adds a form to an array of forms
 * @param state Current state
 * @param action Current action data
 * @param initialItemState Initial state for item
 * @returns {*}
 */
export const addForm = (state, action, initialItemState) => {

  let data = merge.recursive(true, initialItemState, action.data)
  const settings = merge.recursive(true, formSettings, action.settings)
  const uuid = settings.location === null ? v4() : data.uuid
  data = merge.recursive(true, data, {uuid: uuid})
  
  const obj = {
    form: {
      [data.uuid]: data
    },
    settings: {
      [data.uuid]: settings
    }
  }
  console.log(data)
  return merge.recursive(true, state, obj)
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

/**
 * Default settings for forms
 */
export const formSettings = {
  isLocked: false,
  isHidden: false,
  isSaved: false,
  isLoaded: false,
  location: null,
  showSavedBanner: false
}

/**
 * Default reducer object for forms
 */
export const formReducerObject = (actionType) => ({
  [actionType.SET_FORM]: setForm,
  [actionType.SET_FIELD]: {fn: setValue, args: ['form']},
  [actionType.SET_LOCKED]: {fn: setValue, args: ['settings', 'isLocked']},
  [actionType.SET_HIDDEN]: {fn: setValue, args: ['settings', 'isHidden']},
  [actionType.SET_SAVED]: {fn: setValue, args: ['settings', 'isSaved']},
  [actionType.SET_SAVED_BANNER]: {fn: setValue, args: ['settings', 'showSavedBanner']},
  [actionType.SET_LOADED]: {fn: setValue, args: ['settings', 'isLoaded']},
  [actionType.SET_LOCATION]: {fn: setValue, args: ['settings', 'location']},
  [actionType.CLEAR]: clearForm
})

//// New Reducers Below

const setForm = (state, action) => merge.recursive(true, state, action)

export const setValue = (state, action, section, property = null) => {

  console.log(action)

  // Store value and id from action
  const {value, id} = action

  // If property isn't set by function params, get it from action
  property = property === null ? action.property : property

  // Build data object
  let data = {}
  if(id === null || id === undefined) {
    data = {
      [section]: {[property]: value}
    }
  }
  else {
    data = {
      [section]: {[id]: {[property]: value}}
    }
  }

  //console.log(merge.recursive(true, state, data) )
  // Merge data object with state
  return merge.recursive(true, state, data) 
}


// const formReducers = {
//   setFormField: setFormField
// }

// export default formReducers