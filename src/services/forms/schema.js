import * as yup from "yup";
import { updateObject } from "../../store/helpers/utility";

export const loginFormSchema = () => yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
})

export const ticketFormSchema = (paid = false) => { 
  let obj = {
    rank: yup.string().required(),
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    dietary: yup.string().required()
  };
  if(!paid) {
    obj = updateObject(obj, {ticketType: yup.string().required()})
  }
  return yup.object().shape(obj)
}

export const contactFormSchema = () => yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
})

export const passwordResetRequestFormSchema = () => yup.object().shape({
  email: yup.string().email().required()
})

export const passwordResetSubmitFormSchema = () => yup.object().shape({
  password: yup.string().required(),
  passwordConfirm: yup.string().oneOf([yup.ref('password'), null], "Passwords must match")
})


export const userFormSchema = (existing = true) => {
  let obj = {
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    passwordConfirm: yup.string().oneOf([yup.ref('password'), null], "Passwords must match")
  }
  if(!existing) {
    obj = updateObject(obj, {password: yup.string().required()});
  }
  return yup.object().shape(obj);
}