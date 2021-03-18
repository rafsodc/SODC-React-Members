import * as actionTypes from "./actionsTypes";
import axios from './../../services/axios/axios';
import {EVENTS_FUTURE} from "../../services/axios/paths";
import {strToDate} from "../../services/funcs/funcs";

export const eventsGet = () => dispatch => {
  axios.get(EVENTS_FUTURE).then((response) => {
    const data = response.data['hydra:member'];
    data.map(item => strToDate(item, ["date", "bookingOpen", "bookingClose"]));
    return dispatch(setEvents(data));
  });
}

export const eventGet = (apiUrl) => dispatch => {
  axios.get(apiUrl).then((response) => {
    const data = response.data;
    strToDate(data, ["date", "bookingOpen", "bookingClose"]);
    return dispatch(setEvent(data));
  }).catch(error => {});
}

const setEvents = (events) => {
  return {
    type: actionTypes.EVENTS_SET,
    events: events,
  }
}

const setEvent = (event) => {
  return {
    type: actionTypes.EVENT_SET,
    event: event,
  }
}
