import axios from '../../services/axios/axios'
import apiPaths from '../paths'
import actionTypes from '../actionTypes'

export const getBasket = (data) => dispatch => {
  axios.post(apiPaths.basket.BASKETS, JSON.stringify(data))
    .then((response) => dispatch(setBasket(response.data)))
}

export const setBasket = (data) => ({
  type: actionTypes.basket.SET_BASKET,
  data: { id: data['@id'], amount: data.amount, tickets: data.tickets }
})

export const getTransaction = (data) => dispatch => {
  axios.post(apiPaths.transaction.TRANSACTIONS, JSON.stringify(data))
    .then((response) => dispatch(setTransaction(response.data)))
}

export const setTransaction = (data) => ({
  type: actionTypes.basket.SET_TRANSACTION,
  data: { ipg: data.ipg, status: data.status, expired: data.expired }
})

export const setResponse = (data) => {

  const obj = {}

  data.map(element => {
    obj[element['name']] = element['value']

  })

  return {
    type: actionTypes.basket.SET_RESPONSE,
    data: obj
  }
}