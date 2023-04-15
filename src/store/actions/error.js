import * as actionTypes from './actionsTypes'

export const errorFlag = (flag, value) => {
  return {
    type: actionTypes.ERROR_FLAG,
    flag: flag,
    value: value
  }
}

