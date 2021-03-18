import * as actionTypes from "./actionsTypes";
import uuid from "react-uuid";

export const addTicket = () => {
  const key = uuid();
  return {
    type: actionTypes.ADD_ARRAY_FORM,
    form: 'ticket',
    key: key
  }
}