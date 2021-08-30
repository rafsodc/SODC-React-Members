import {addForm, setFormField, setFormLocked, submitForm, removeForm} from "../helpers/formActions";
import actionTypes from "../actionTypes";
import axios from "../../services/axios/axios";
import apiPaths from "../paths";
import {strToDate} from "../../services/funcs/funcs";
import {updateObject} from "../helpers/utility";

export const addTicket = (fields = null) => addForm(actionTypes.ticket.NAME, fields);
export const removeTicket = (id) => removeForm(actionTypes.ticket.NAME, id);
export const setTicketField = (data, id) => setFormField(actionTypes.ticket.NAME, data, id);
export const setTicketLocked = (isLocked, id) => setFormLocked(actionTypes.ticket.NAME, isLocked, id);
export const submitTicketForm = (data, id, location = null, event, owner) => {
  if(location === null) {
    data = updateObject(data, {owner: owner, event: event, uuid: id})
  }
  /** Not sure why this is in an array - @todo check */
  return [submitForm(actionTypes.ticket.NAME, data, id, location)]
}

export const loadTickets = (event, owner = null) => dispatch => {
  let query = "?event=" + event;
  query += (owner !== null) ? "&owner=" + owner : "";
  axios.get(apiPaths.ticket.GET_COLLECTION + query).then((response) => {
    const data = response.data['hydra:member'];
    return dispatch([resetTickets(), addTickets(data)]);
  });
}

export const addTickets = (data = []) => {
  return data.map(item => addTicket(item));
}

export const resetTickets = () => ({
  type: actionTypes.ticket.RESET
});

export const deleteTicket = (id, location) => dispatch => {
  if(location !== null) {
    axios.delete(location).then(
      dispatch(removeTicket(id))
    )
  }
  else {
    dispatch(removeTicket(id));
  }
}