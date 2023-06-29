import { setFormSaved, removeForm, setFormField, setFormLocked, submitForm, setFormSavedBanner } from '../helpers/formActions'
import actionTypes from '../actionTypes'
import axios from '../../utils/axios/axios'
import apiPaths from '../paths'
import { updateObject, dataHandler } from '../helpers/utility'
import { formReducerObject } from '../helpers/formReducers'

export const setTicketField = (property, value, id = null) => setFormField(actionTypes.ticket.NAME, property, value, id);
export const setTicketLocked = (locked, id = null) => setFormLocked(actionTypes.ticket.NAME,locked, id);
export const setTicketSaved = (saved, id = null) => setFormSaved(actionTypes.ticket.NAME,saved, id);
export const setTicketSavedBaner = (saved, id = null) => setFormSavedBanner(actionTypes.ticket.NAME,saved, id)

export const removeTicket = (id) => removeForm(actionTypes.ticket.NAME, id)

export const submitTicketForm = (data, location = null, event, owner) => {
  if (location === null) {
    data = updateObject(data, { owner: owner, event: event})
  }
  // Set the ticketType to the ticketType id
  //data = updateObject(data, {ticketType: data.ticketType['@id']})
  /** Not sure why this is in an array - @todo check */
  return submitForm(actionTypes.ticket.NAME, data, data.uuid, location)
}

// export const loadTickets = (event, owner = null, typeIsString = true) => dispatch => {
//   let query = '?event=' + event
//   query += (owner !== null) ? '&owner=' + owner : ''
//   axios.get(apiPaths.ticket.GET_COLLECTION + query).then((response) => {
//     const data = response.data['hydra:member']
//     return dispatch([resetTickets(), addTickets(data, typeIsString)])
//   })
// }

export const loadEventTickets = (event, owner = null) => dispatch => {
  const query = (owner !== null) ? '?owner=' + owner : ''
  axios.get(event + '/tickets' + query).then((response) => {
    const addTicketsReducer = response.data['hydra:member'].map(ticket => {
      const handledTicket = dataHandler(ticket);
      return addTicket(handledTicket.data, handledTicket.location)
    })
    return dispatch([resetTickets(), addTicketsReducer])
  })
}

export const addTicket = (data = null, location = null) => ({
  type: actionTypes.ticket.ADD,
  data: data,
  settings: {
    isSaved: location !== null,
    location: location,
  }
})

// export const addTickets = (data = []) => {
//   console.log(data);
//   return data.map(item => {
//     // ticketType is received as an object, but we only require the id.
//     return addTicket(data)
//   })
// }

export const resetTickets = () => ({
  type: actionTypes.ticket.RESET
})

export const deleteTicket = (id, location) => dispatch => {
  if (location !== null) {
    axios.delete(location).then(
      dispatch(removeTicket(id))
    )
  } else {
    dispatch(removeTicket(id))
  }
}



