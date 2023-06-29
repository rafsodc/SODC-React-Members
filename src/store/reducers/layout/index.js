import actionTypes from '../../actionTypes'
import { createReducer, setParam, updateObject } from '../../helpers/utility'
import merge from 'merge'

const initialState = {
  accordion: 0,
  //tab: 'tickets'
}

const setTab = (state, action) => merge.recursive(true, state, {tab: action.value})
const setAccordion = (state, action) => merge.recursive(true, state, {accordion: action.value})

const reducer = createReducer(initialState, {
  [actionTypes.layout.SET_ACCORDION]: setAccordion,
  [actionTypes.layout.SET_TAB]: setTab
})

export default reducer