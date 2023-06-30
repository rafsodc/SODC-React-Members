// export const SET_EVENT = 'SET_EVENT'
// export const SET_EVENTS = 'SET_EVENTS'
// export const SET_USER = 'SET_USER'
// export const SET_EVENT_USER = 'SET_EVENT_USER'

const event = {
    NAME: 'event',
    SET: 'SET_EVENT',
    SET_LIST: 'SET_EVENT_LIST',
    SET_FUTURE_LIST: 'SET_FUTURE_EVENT_LIST',
    CLEAR: 'CLEAR_EVENT',
    SET_FIELD: 'SET_EVENT_FIELD',
    SET_LOCKED: 'SET_EVENT_LOCKED',
    SET_HIDDEN: 'SET_EVENT_HIDDEN',
    SET_SAVED: 'SET_EVENT_SAVED',
    SET_IS_LOADED: 'SET_EVENT_IS_LOADED',
    SET_ACCORDIAN: 'SET_EVENT_ACCORDIAN',
    SET_FORM: 'SET_EVENT_FORM'
}

const ticketType = {
    NAME: 'ticketType',
    ADD_FORM: 'ADD_TICKET_TYPE_FORM',
    CLEAR_ALL: 'CLEAR_TICKET_TYPES',
    ADD: 'ADD_TICKET_TYPE'
}

export default {
    event: event,
    ticketType: ticketType
}