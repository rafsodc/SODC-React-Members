import {useEffect} from 'react';
import {useForm} from "react-hook-form";
import setYup from "./setYup";
import {isEmptyObject} from "../funcs/funcs";
import {useDispatch, useSelector} from "react-redux";
import * as actionTypes from "../../store/actions";
import httpServices from "../http/ServiceSelect";


const useFormBuilder = (schema, formName) => {

  const formYupResolver = setYup(schema);
  const dispatch = useDispatch();
  const data = useSelector(state => state.forms[formName]);
  const captchaError = useSelector(state => state.error.captcha);
  const {[formName]: httpService} = httpServices;

  const onSubmit = () => {
    httpService.create(JSON.stringify(data.fields))
    .then(() => {
      // If we get a valid response
      dispatch({
        type: actionTypes.ALERT_OPEN,
        alert: {
          variant: 'success',
          dismissible: false,
          heading: "Form Submitted",
          message: "Form successfully submitted."
        },
        sticky: false,
      });
      dispatch({
        type: actionTypes.FORM_HIDE,
        form: formName
      })
    });
  }
  const onCaptchaSubmit = () => {
    if (data.fields.captcha === null) {
      dispatch({
        type: actionTypes.ERROR_FLAG,
        flag: 'captcha',
        value: true
      });
      dispatch({
        type: actionTypes.ALERT_OPEN,
        alert: {
          variant: 'danger',
          dismissible: false,
          heading: "Unable to submit form",
          message: "Please complete the reCAPTCHA verification process."
        },
        sticky: false,
      });
    } else {
      return onSubmit();
    }
  }
  const onChange = (event) => dispatch({
    type: actionTypes.FORM_SAVE,
    form: formName,
    data: {
      [event.target.name]: event.target.value,
    }
  });
  const onRecaptcha = (value) => {
    dispatch({
      type: actionTypes.FORM_SAVE,
      form: formName,
      data: {
        captcha: value,
      }
    });
    dispatch({
      type: actionTypes.ERROR_FLAG,
      flag: 'captcha',
      value: value === null
    });
  }

  const myForm = useForm({
    resolver: (formYupResolver),
    mode: "onBlur",
    reValidateMode: "onBlur"
  });

  // Use effect is called whenever the component renders, and there is a change in the dependencies
  useEffect(() => {
    // If this form is being submitted (and hasn't been submitted before) and there are errors then flag an error.
    if (myForm.formState.isSubmitting && !myForm.formState.submitCount && !isEmptyObject(myForm.formState.errors)) {
      dispatch({
        type: actionTypes.ALERT_OPEN,
        alert: {
          variant: 'danger',
          dismissible: false,
          heading: "Unable to submit form",
          message: "Please ensure all of the fields are completed and no errors are shown below."
        },
        sticky: false,
      });
    }

  }, [dispatch, myForm.formState]);


  return {
    ...myForm,
    onCaptchaSubmit: onCaptchaSubmit,
    onSubmit: onSubmit,
    onRecaptcha: onRecaptcha,
    onChange: onChange,
    data: data,
    captchaError: captchaError
  };
}


export default useFormBuilder;