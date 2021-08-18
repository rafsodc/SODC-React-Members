import actionTypes from "../actionTypes"
import uuid from "react-uuid";
import {addForm, setFormFields} from "../helpers/formActions";
import axios from "../../services/axios/axios";
import apiPaths from "../paths";
import {addTickets} from "./ticket";


export const setAccordion = (tab, accordian) => {
  return {
    type: actionTypes.booking.SET_ACCORDION,
    tab: tab,
    data: accordian
  }
}

export const setOwner = (ownerIri) => {
  return {
    type: actionTypes.booking.SET_OWNER,
    data: ownerIri
  }
}

export const setOwnerError = (isError) => {
  return {
    type: actionTypes.booking.SET_OWNER_ERROR,
    data: isError
  }
}

export const setOwnerSelected = (isSelected) => {
  return {
    type: actionTypes.booking.SET_OWNER_SELECTED,
    data: isSelected
  }
}

export const setTab = (tab) => {
  return {
    type: actionTypes.booking.SET_TAB,
    data: tab
  }
}



