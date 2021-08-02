import actionTypes from "../../actionTypes"
import {createReducer, setParam, updateObject} from "../../helpers/utility";

const initialState = {
  loaded: false,
  valid: null
}

const setLoaded = (state, action) => setParam(state, updateObject(action, {param: 'loaded'}))
const setValid = (state, action) => setParam(state, updateObject(action, {param: 'valid'}));

const reducer = createReducer(initialState, {
  [actionTypes.passwordResetSubmit.SET_LOADED]: setLoaded,
  [actionTypes.passwordResetSubmit.SET_VALID]: setValid
});

export default reducer;