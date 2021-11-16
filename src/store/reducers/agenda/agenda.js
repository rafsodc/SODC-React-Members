import {createReducer, updateObject} from "../../helpers/utility";
import actionTypes from "../../actionTypes";

const initialState = {
  agenda: [],
  loaded: false,
  accordion: null
}

const setAgenda = (state, action) => {
  return {agenda: action.data, loaded: true};
};

const setAccordion = (state, action) => {
  return updateObject(state, {accordion: action.value});
};

const reducer = createReducer(initialState, {
  [actionTypes.agenda.SET]: setAgenda,
  [actionTypes.agenda.SET_ACCORDION]: setAccordion
});

export default reducer;