import { dataHandler } from "../helpers/utility";
import actionTypes from '../actionTypes';
import { setFormSaved, removeForm, setFormField, setFormLocked, submitForm, setFormSavedBanner } from '../helpers/formActions'
import axios from '../../utils/axios/axios'

export const setTicketTypeField = (property, value, id = null) => setFormField(actionTypes.ticketType.NAME, property, value, id);
export const setTicketTypeLocked = (locked, id = null) => setFormLocked(actionTypes.ticketType.NAME,locked, id);
export const setTicketTypeSaved = (saved, id = null) => setFormSaved(actionTypes.ticketType.NAME,saved, id);
export const setTicketTypeSavedBanner = (saved, id = null) => setFormSavedBanner(actionTypes.ticketType.NAME,saved, id)
export const removeTicketType = (id) => removeForm(actionTypes.ticket.NAME, id)

export const setTicketTypeForm = (ticketTypes) => dispatch => {
    const ticketTypesObj = ticketTypes.map(ticketType => {
        const {data, location } = dataHandler(ticketType)
        return addTicketType(data, location)
    })

    return dispatch([resetTicketTypes(), ticketTypesObj])
}

export const submitTicketTypeForm = (data, location = null, event) => {
  if (location === null) {
    data = {...data, event: event}
  }
  return submitForm(actionTypes.ticketType.NAME, data, data.uuid, location)
}

  export const addTicketType = (data = null, location = null) => ({
    type: actionTypes.ticketType.ADD,
    data: data,
    settings: {
      isSaved: location !== null,
      location: location,
    }
  })

  export const resetTicketTypes = () => ({
    type: actionTypes.ticketType.CLEAR_ALL
  })

  export const deleteTicketType = (id, location) => dispatch => {
    if (location !== null) {
      axios.delete(location).then(
        dispatch(removeTicketType(id))
      )
    } else {
      dispatch(removeTicketType(id))
    }
  }