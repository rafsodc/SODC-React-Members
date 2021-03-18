import * as actionTypes from "../actions/actionsTypes";
import {updateObject} from "../utility";

const initialState = {
  ticketCount: 0,
};

const addTicket = (state) => {
  return updateObject(state, {ticketCount: state.ticketCount + 1});
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TICKET: return addTicket(state);
    default:
      return state;
  }
}

export default reducer;