import axios from "../../services/axios/axios";
import apiPaths from "../paths";
import {strToDate} from "../../services/funcs/funcs";
import actionTypes from "../actionTypes";


export const loadUsers = (searchStr, id) => dispatch => {
  dispatch(setLoading(true, id));
  const path = apiPaths.user.GET_COLLECTION + "?name=" + searchStr
  axios.get(path).then((response) => {
    return dispatch(setOptions(response.data['hydra:member'], id));
  })
  .finally(
    dispatch(setLoading(false, id))
  );
}

export const setMeAsDefault = (id) => dispatch => {
  dispatch(setLoading(true, id));
  const path = apiPaths.user.GET_COLLECTION + "?isMe=true"
  axios.get(path).then((response) => {
    return dispatch([
      setOptions(response.data['hydra:member'], id),
      setValue(response.data['hydra:member'], id)
    ]);

  })
  .finally(
    dispatch(setLoading(false, id))
  );
}

export const setOptions = (options, id) => ({
  type: actionTypes.typeAhead.SET_OPTIONS,
  id: id,
  payload: options
});

export const setLoading = (isLoading, id) => ({
  type: actionTypes.typeAhead.SET_LOADING,
  id: id,
  payload: isLoading
});

export const setValue = (value, id) => ({
  type: actionTypes.typeAhead.SET_VALUE,
  id: id,
  payload: value
});

export const setError = (isError, id) => ({
  type: actionTypes.typeAhead.SET_ERROR,
  id: id,
  payload: isError
});