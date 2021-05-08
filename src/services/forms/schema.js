import * as yup from "yup";

const loginFormSchema = () => yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
})

const ticketFormSchema = () => yup.object().shape({
  ticketType: yup.string().required(),
  rank: yup.string().required(),
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  dietary: yup.string().required()
})

export {loginFormSchema, ticketFormSchema}