import { combineReducers } from 'redux'

import alertReducer from './alert'
import errorReducer from './error'
import eventReducer from './event/'
import bookingReducer from './booking'
import ticketReducer from './ticket'
import typeAheadReducer from './typeAhead'
import authenticationReducers from './authentication/'
import transactionReducer from './transaction'
import pageReducer from './page'
import contactReducer from './contact'
import basketReducer from './basket'
import userReducer from './user'
import agendaReducer from './agenda/agenda'
import layoutReducer from './layout'

const rootReducer = combineReducers({
  agendaReducer: agendaReducer,
  ...authenticationReducers,
  alertReducer: alertReducer,
  errorReducer: errorReducer,
  ...eventReducer,
  bookingReducer: bookingReducer,
  ticketReducer: ticketReducer,
  typeAheadReducer: typeAheadReducer,
  transactionReducer: transactionReducer,
  pageReducer: pageReducer,
  contactReducer: contactReducer,
  basketReducer: basketReducer,
  ...userReducer,
  layoutReducer: layoutReducer
})

export default rootReducer