import {createReducer, updateObject} from "../helpers/utility";
import actionTypes from "../actionTypes";
import {setParam} from "../helpers/utility";

const initialState = {
  id: null,
  amount: 0,
  tickets: [],
  loaded: false,
  transaction: null,
  response: null
}

const setBasket = (state, action) => {
  const tickets = (action.data.tickets === undefined) ? [] : action.data.tickets;
  return updateObject(state,  {...action.data, tickets: tickets, loaded: true})
};

const setResponse = (state, action) => setParam(state, updateObject(action, {param: 'response'}));

const setTransaction = (state, action) => setParam(state, updateObject(action, {param: 'transaction'}))

const reducer = createReducer(initialState, {
  [actionTypes.basket.SET_BASKET]: setBasket,
  [actionTypes.basket.SET_TRANSACTION]: setTransaction,
  [actionTypes.basket.SET_RESPONSE]: setResponse,
});

export default reducer;