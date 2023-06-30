import { dataHandler } from "../helpers/utility";
import actionTypes from '../actionTypes';

export const setTicketTypeForm = (ticketTypes) => dispatch => {
    const ticketTypesObj = ticketTypes.map(ticketType => {
        const {data, location } = dataHandler(ticketType)
        return addTicketType(data, location)
    })

    return dispatch([resetTicketTypes(), ticketTypesObj])
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