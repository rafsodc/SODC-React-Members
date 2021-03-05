import * as actionTypes from "./actionsTypes";
import axios from './../../services/axios/axios';
import {EVENTS} from "../../services/axios/paths";

export const eventsGet = () => dispatch => {
  axios.get(EVENTS).then((response) => dispatch(eventsLoad(response.data['hydra:member'])));
}

const eventsLoad = (events) => {
  return {
    type: actionTypes.EVENTS_LOAD,
    events: events,
  }
}
