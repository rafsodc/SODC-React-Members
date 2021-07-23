import {addElement, blankObject, updateItemOrArray, updateObject, setParam, removeElementById} from "./utility";

/**
 * Adds a form to an array of forms
 * @param state Current state
 * @param action Current action data
 * @param newElement New element to be added
 * @returns {*}
 */
export const addForm = (state, action, newElement) => {
  if(action.fields !== null) {
    newElement = updateObject(newElement, {fields: action.fields})
  }
  // Set the key on the newElement
  const el = updateObject(newElement, {id: action.id, location: action.location, saved: action.saved});
  // Update state
  return addElement(state, el);
};

/**
 * Removes a form to an array of forms
 * @param state Current state
 * @param action Current action data
 * @returns {*}
 */
 export const removeForm = (state, action) => {
  return removeElementById(state, action.id);
};

/**
 * Sets the data fields for a particular form
 * @param state
 * @param action
 * @returns {*}
 */
export const setField = (state, action) => {
  const setSingle = (obj = state) => {
    const fields = updateObject(obj.fields, action.data);
    return updateObject(obj, {fields: fields, saved: false});
  }
  return updateItemOrArray(state, action, setSingle);
}

/**
 * Clears the form
 * @param state
 * @param action
 * @returns {*}
 */
export const clearForm = (state, action) => {
  const setSingle = (obj = state) => updateObject(obj, {fields: blankObject(obj.fields)});

  return updateItemOrArray(state, action, setSingle);
}

/**
 * Default reducer object for forms
 */
export const formReducerObject = (actionType) => ({
  [actionType.SET_FIELD]: setField,
  [actionType.SET_LOCKED]: setParam,
  [actionType.SET_HIDDEN]: setParam,
  [actionType.CLEAR]: clearForm
});