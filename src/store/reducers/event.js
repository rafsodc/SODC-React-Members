import * as actionTypes from "../actions/actionsTypes";
import {updateObject} from "../utility";

const initialState = {
  events: [],
  event: null,
  loaded: false
};

const setEvents = (state, action) => {
  return updateObject(state, {events: action.events, loaded: true});
}

const setEvent = (state, action) => {
  return updateObject(state, {event: action.event});
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EVENTS_SET: return setEvents(state, action);
    case actionTypes.EVENT_SET: return setEvent(state, action);
    default:
      return state;
  }
}

export default reducer;