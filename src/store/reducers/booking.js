import actionTypes from '../actionTypes'
import { createReducer, setParam, updateObject } from '../helpers/utility'

const initialState = {
  accordion: {
    ticket: 0,
    transaction: 0
  },
  tab: 'tickets',
  owner: null,
  ownerError: false,
  ownerSelected: false
}

const setOwner = (state, action) => setParam(state, updateObject(action, { param: 'owner' }))
const setOwnerError = (state, action) => setParam(state, updateObject(action, { param: 'ownerError' }))
const setOwnerSelected = (state, action) => setParam(state, updateObject(action, { param: 'ownerSelected' }))
const setTab = (state, action) => setParam(state, updateObject(action, { param: 'tab' }))
const setAccordion = (state, action) => updateObject(state, { accordion: updateObject(state.accordion, { [action.tab]: action.data }) })

const reducer = createReducer(initialState, {
  [actionTypes.booking.SET_ACCORDION]: setAccordion,
  [actionTypes.booking.SET_OWNER]: setOwner,
  [actionTypes.booking.SET_OWNER_ERROR]: setOwnerError,
  [actionTypes.booking.SET_OWNER_SELECTED]: setOwnerSelected,
  [actionTypes.booking.SET_TAB]: setTab
})

export default reducer