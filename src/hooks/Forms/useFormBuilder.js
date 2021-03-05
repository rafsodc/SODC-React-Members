import {useEffect} from 'react';
import {useForm} from "react-hook-form";
import setYup from "../../services/forms/setYup";
import {isEmptyObject} from "../../services/funcs/funcs";
import {useDispatch, useSelector} from "react-redux";
import {formHide, formSave, formUnlock, formLock} from "../../store/actions/form";
import {alertCloseUnsticky, alertOpen} from "../../store/actions/alert";
import {ALERT_DANGER} from "../../ReactUI/AlertWindow/alertTypes";
import {errorFlag} from "../../store/actions/error";

const useFormBuilder = (schema, formName, httpService) => {

  const formYupResolver = setYup(schema);
  const dispatch = useDispatch();
  const data = useSelector(state => state.formsReducer[formName]);
  const captchaError = useSelector(state => state.errorReducer.captcha);

  const onSubmit = () => {
    dispatch(alertCloseUnsticky());
    dispatch(formLock(formName));
    httpService.create(JSON.stringify(data.fields))
    .then(() => {
      // If we get a valid response
      dispatch(alertOpen("Form Submitted", "Form successfully submitted."));
      dispatch(formHide(formName));
    })
    .catch(() => {})
    .finally(() => {
      dispatch(formUnlock(formName));
    })
  }
  const onCaptchaSubmit = () => {
    if (data.fields.captcha === null) {
      dispatch(errorFlag('captcha', true))
      dispatch(alertOpen("Unable to submit form", "Please complete the reCAPTCHA verification process.", ALERT_DANGER));
    } else {
      return onSubmit();
    }
  }
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
      dispatch(alertOpen("Unable to submit form", "Please ensure all of the fields are completed and no errors are shown below.", ALERT_DANGER));
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