import actionTypes from "../actionTypes"
import * as formReducers from "../helpers/formReducers";
import {setParam} from "../helpers/utility";

const initialTicket = {
  fields: {
    rank: "",
    firstname: "",
    lastname: "",
    dietary: "",
    ticketType: "",
    seatingPreferences: []
  },
  locked: false,
  id: null,
  saved: false,
  location: null,
}


const reducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ticket.ADD: return formReducers.addForm(state, action, initialTicket);
    case actionTypes.ticket.REMOVE: return formReducers.removeForm(state, action);
    case actionTypes.ticket.SET_FIELD: return formReducers.setField(state, action);
    case actionTypes.ticket.SET_LOCKED: return setParam(state, action);
    case actionTypes.ticket.SET_SAVED: return setParam(state, action);
    case actionTypes.ticket.SET_LOCATION: return setParam(state, action);
    case actionTypes.ticket.RESET: return [];
    default:
      return state;
  }
}

export default reducer;