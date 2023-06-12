import {merge} from 'merge'

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  }
}

export const updateItemInArray = (array, itemId, updateItemCallback) => {
  const updatedItems = array.map(item => {
    if (item.id !== itemId) {
      // Since we only want to update one item, preserve all others as they are now
      return item
    }
    // Use the provided callback to create an updated item
    const updatedItem = updateItemCallback(item)
    return updatedItem
  })

  return updatedItems
}

export const updateItemOrArray = (state, action, setSingle) => {
  const setArrayElement = () => {
    return updateItemInArray(state, action.id, setSingle)
  }
  return (Array.isArray(state)) ? setArrayElement() : setSingle()
}

export const addElement = (oldArray, element) => {
  let arr = [...oldArray]
  arr.push(element)
  return arr
}

export const removeElementByIndex = (oldArray, index) => {
  return [...oldArray].splice(index, 1)
}

export const removeElementByValue = (oldArray, value) => {
  return [...oldArray].filter(el => (el !== value))
}

export const removeElementById = (oldArray, id) => {
  return [...oldArray].filter(el => (el.id !== id))
}

export const replaceElementByIndex = (oldArray, index, newElement) => {
  const arr = [...oldArray]
  arr[index] = newElement
  return arr
}

export const blankObject = (oldObject) => {
  const obj = { ...oldObject }

  Object.keys(obj).map((key) => {
    obj[key] = ''
  })
  return obj
}

/**
 * Sets a parameter
 * @param state
 * @param action
 * @returns {*}
 */
export const setParam = (state, action) => {
  const setSingle = (obj = state) => updateObject(obj, { [action.param]: action.data })
  return updateItemOrArray(state, action, setSingle)
}

export const mergeObject = (state, action) => {
  const setSingle = (obj = state) =>  merge.recursive(true, state, action.object);
  return updateItemOrArray(state, action, setSingle());
}

export const createReducer = (initialState, handlers) => (state = initialState, action) => {

  if (handlers.hasOwnProperty(action.type)) {
    if (typeof (handlers[action.type]) === 'function') {
      return handlers[action.type](state, action)
    } else {
      return handlers[action.type].fn(state, action, ...handlers[action.type].args)
    }
  } else {
    return state
  }
}


