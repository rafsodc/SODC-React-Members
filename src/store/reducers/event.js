import * as actionTypes from "../actions/actionsTypes";

const initialState = [];

const eventsLoad = (state, action) => {
  return action.events
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EVENTS_LOAD: return eventsLoad(state, action);
    default:
      return state;
  }
}

export default reducer;