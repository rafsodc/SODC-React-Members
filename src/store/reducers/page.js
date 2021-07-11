import actionTypes from "../actionTypes"
import {createReducer, updateObject, setParam} from "../helpers/utility";

const initialState = {
    content: null,
    loading: true,
  }

const setContent = (state, action) => setParam(state, updateObject(action, {param: 'content'}));
const setLoading = (state, action) => setParam(state, updateObject(action, {param: 'loading'}));

const reducer = createReducer(initialState, {
  [actionTypes.page.SET_CONTENT]: setContent,
  [actionTypes.page.SET_LOAD]: setLoading
});

export default reducer;