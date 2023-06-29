import actionTypes from '../actionTypes'

export const setAccordion = (accordian) => {
  return {
    type: actionTypes.layout.SET_ACCORDION,
    value: accordian
  }
}