import axios from "../../services/axios/axios";
import apiPaths from "../paths";
import actionTypes from "../actionTypes";
import ipgAxios from 'axios';

export const loadTransactions = (event, owner = null) => dispatch => {
  let query = "?event=" + event;
  query += (owner === null) ? "&owner=" + owner : "";
  axios.get(apiPaths.transaction.GET_COLLECTION + query).then((response) => {
    const data = response.data['hydra:member'];
    return dispatch(addTransactions(data));
  });
}

export const addTransactions = (data = []) => ({
  type: actionTypes.transaction.SET_TRANSACTIONS,
  data: data
});

