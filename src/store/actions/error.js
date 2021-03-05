import * as actionTypes from "./actionsTypes";
import { alertOpen } from "./alert";
import rollbar from "../../services/rollbar/rollbar";

export const errorFlag = (flag, value) => {
  return {
    type: actionTypes.ERROR_FLAG,
    flag: flag,
    value: value
  }
}

