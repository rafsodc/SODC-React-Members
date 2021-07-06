import {createReducer, updateObject} from "../helpers/utility";
import actionTypes from "../actionTypes";
import {setParam} from "../helpers/utility";

const initialState = {
  id: null,
  amount: 0,
  tickets: [],
  loaded: false,
  transaction: null
}

const setBasket = (state, action) => {
  const tickets = (action.tickets === undefined) ? [] : action.tickets;
  return updateObject(state,  {...action.data, loaded: true})
};

const setTransaction = (state, action) => setParam(state, updateObject(action, {param: 'transaction'}))

const reducer = createReducer(initialState, {
  [actionTypes.basket.SET_BASKET]: setBasket,
  [actionTypes.basket.SET_TRANSACTION]: setTransaction,
});

export default reducer;