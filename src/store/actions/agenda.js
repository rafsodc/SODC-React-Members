import axios from '../../utils/axios/axios'
import actionTypes from '../actionTypes/'
import apiPaths from '../paths'
import { strToDate } from '../../utils/funcs/funcs'

export const loadAgenda = (event) => dispatch => {
  axios.get(apiPaths.agenda.EVENT_AGENDA.format(event)).then((response) => {
    const data = response.data['hydra:member']
    const agenda = data.map(agendaItem => strToDate(agendaItem, ['start', 'finish']))
    return dispatch(setAgenda(agenda))
  })
}

export const setAgenda = (data) => {
  return {
    type: actionTypes.agenda.SET,
    data: data
  }
}

export const setAccordion = (value) => {
  return {
    type: actionTypes.agenda.SET_ACCORDION,
    value: value
  }
}


