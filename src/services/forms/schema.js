import * as yup from "yup";

export const loginFormSchema = () => yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
})

export const ticketFormSchema = () => yup.object().shape({
  ticketType: yup.string().required(),
  rank: yup.string().required(),
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  dietary: yup.string().required()
})

export const contactFormSchema = () => yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
})