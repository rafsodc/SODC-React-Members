import {useEffect, useLayoutEffect} from 'react';
import {useForm} from "react-hook-form";
import setYup from "../../services/forms/setYup";
import {isEmptyObject} from "../../services/funcs/funcs";
import {useDispatch, useSelector} from "react-redux";
import {formSave, formSubmit, formSubmitCaptcha, setupArrayForm} from "../../store/actions/form";
import {setAlert} from "../../store/actions";
import {ALERT_DANGER} from "../../ReactUI/AlertWindow/alertTypes";
import {errorFlag} from "../../store/actions";

const useFormBuilder = (schema, formName, fields, apiUrl) => {

  const formYupResolver = setYup(schema);
  const dispatch = useDispatch();
  const captchaError = useSelector(state => state.errorReducer.captcha);

  const onSubmit = () => dispatch(formSubmit(formName, apiUrl, fields));
  const onCaptchaSubmit = () => dispatch(formSubmitCaptcha(formName, apiUrl, fields));

  const onChange = (event) => {
     dispatch(formSave(formName, {[event.target.name]: event.target.value}));
  }

  const onRecaptcha = (value) => {
    dispatch(formSave(formName, {captcha: value}));
    dispatch(errorFlag('captcha', value === null))
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
      dispatch(setAlert("Unable to submit form", "Please ensure all of the fields are completed and no errors are shown below.", ALERT_DANGER));
      //console.log(myForm.formState.errors);
    }

  }, [dispatch, myForm.formState.isSubmitting, myForm.formState.submitCount, !isEmptyObject(myForm.formState.errors)]);


  return {
    ...myForm,
    //childProps: childProps,
    onChange: onChange,
    onCaptchaSubmit: onCaptchaSubmit,
    onSubmit: onSubmit,
    onRecaptcha: onRecaptcha,
    captchaError: captchaError,
  };
}


export default useFormBuilder;