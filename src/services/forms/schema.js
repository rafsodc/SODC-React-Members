import * as yup from "yup";

const loginFormSchema = () => yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
})

const ticketFormSchema = () => yup.object().shape({
  email: yup.string().email().required(),
  rank: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
})

export {loginFormSchema, ticketFormSchema}