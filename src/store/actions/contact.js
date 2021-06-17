import {setFormField, setFormHidden, setFormLocked, submitForm} from "../helpers/formActions";
import actionTypes from "../actionTypes";

export const setContactField = (data) => setFormField(actionTypes.contact.NAME, data);
export const setContactLocked = (isLocked) => setFormLocked(actionTypes.contact.NAME, isLocked);
export const setContactHidden = (isHidden) => setFormHidden(actionTypes.contact.NAME, isHidden);


