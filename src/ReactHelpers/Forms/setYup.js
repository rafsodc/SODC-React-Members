import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const setYup = (schema) => {
  yup.setLocale({
    mixed: {
      required: 'Field is required',
      notType: ({type, originalValue}) => {
        return originalValue === "" ? `Field is required` : `Field must be a ${type}`;
      },
    },
    string: {
      email: 'Field needs to be a valid email address'
    },
    number: {}
  });

  return yupResolver(schema());
}

export default setYup;