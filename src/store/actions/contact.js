import { setFormField, setFormHidden, setFormLocked, submitForm } from '../helpers/formActions'
import actionTypes from '../actionTypes'

export const setContactField = (property, value) => setFormField(actionTypes.contact.NAME, property, value)
export const setContactLocked = (isLocked) => setFormLocked(actionTypes.contact.NAME, isLocked)
export const setContactHidden = (isHidden) => setFormHidden(actionTypes.contact.NAME, isHidden)

export const submitContactForm = (data) => submitForm(actionTypes.contact.NAME, data, null, null)
