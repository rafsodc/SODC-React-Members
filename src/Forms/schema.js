import * as yup from "yup";

const loginFormSchema = () => yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
})

export {loginFormSchema}