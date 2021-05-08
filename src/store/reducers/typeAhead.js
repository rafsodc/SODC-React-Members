import actionTypes from "../actionTypes"
import {createReducer, updateObject} from "../helpers/utility";

const initialTypeAhead = {
  options: [],
  loading: false,
  selected: [],
  error: false
}

const initialState = {
  bookingOwner: initialTypeAhead
}

const setParam = (state, action, param) => {
  const el = updateObject(state[action.id], {[param]: action.payload});
  return updateObject(state, {[action.id]: el});
}

const reducer = createReducer(initialState, {
  [actionTypes.typeAhead.SET_OPTIONS]: {fn: setParam, args: ['options']},
  [actionTypes.typeAhead.SET_LOADING]: {fn: setParam, args: ['loading']},
  [actionTypes.typeAhead.SET_VALUE]: {fn: setParam, args: ['selected']},
  [actionTypes.typeAhead.SET_ERROR]: {fn: setParam, args: ['error']},
});

export default reducer;