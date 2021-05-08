import actionTypes from "../actionTypes"
import {setParam, updateObject} from "../helpers/utility";

const initialBookingState = {
  accordion: 0,
  tab: "tickets",
  owner: null
};

const reducer = (state = initialBookingState, action) => {
  switch (action.type) {
    case actionTypes.booking.SET_ACCORDION: return setParam(state, action);
    case actionTypes.booking.SET_OWNER: return setParam(state, action);
    case actionTypes.booking.SET_TAB: return setParam(state, action);
    default:
      return state;
  }
}

export default reducer;