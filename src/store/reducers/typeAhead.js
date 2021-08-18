import actionTypes from "../actionTypes"
import {addElement, createReducer, updateObject, removeElementById} from "../helpers/utility";

const initialTypeAhead = {
  id: null,
  options: [],
  loading: false,
  selected: [],
  error: false
}

// const initialState = {
//   bookingOwner: initialTypeAhead.error,
//   seatingPreference: initialTypeAhead
// }

const setParam = (state, action, param) => {
  const el = updateObject(state[action.id], {[param]: action.payload});
  return updateObject(state, {[action.id]: el});
}

const add = (state, action) => {
  const el = updateObject(initialTypeAhead, {id: action.id})
  return addElement(state, el)
}

const remove = (state, action) => removeElementById(state, action.id);


const reducer = createReducer([], {
  [actionTypes.typeAhead.SET_OPTIONS]: {fn: setParam, args: ['options']},
  [actionTypes.typeAhead.SET_LOADING]: {fn: setParam, args: ['loading']},
  [actionTypes.typeAhead.SET_VALUE]: {fn: setParam, args: ['selected']},
  [actionTypes.typeAhead.SET_ERROR]: {fn: setParam, args: ['error']},
  [actionTypes.typeAhead.ADD]: add,
  [actionTypes.typeAhead.REMOVE]: remove
});

export default reducer;