import actionTypes from "../actionTypes"
import uuid from "react-uuid";
import {addForm, setFormFields} from "../helpers/formActions";
import axios from "../../services/axios/axios";
import apiPaths from "../paths";
import {addTickets} from "./ticket";


export const setAccordion = (accordian) => {
  return {
    type: actionTypes.booking.SET_ACCORDION,
    param: 'accordion',
    data: accordian
  }
}

export const setOwner = (ownerIri) => {
  return {
    type: actionTypes.booking.SET_OWNER,
    param: 'owner',
    data: ownerIri
  }
}

export const setTab = (tab) => {
  return {
    type: actionTypes.booking.SET_TAB,
    param: 'tab',
    data: tab
  }
}



