import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import setYup from '../../utils/forms/setYup'
import { isEmptyObject } from '../../utils/funcs/funcs'
import { useDispatch } from 'react-redux'
import { clearUnstickyAlerts, setAlert } from '../../store/actions'
import { ALERT_DANGER } from '../../components/AlertWindow/alertTypes'

const useFormBuilder = (schema) => {

  const formYupResolver = setYup(schema)
  const dispatch = useDispatch()
  //const captchaError = useSelector(state => state.errorReducer.captcha);

  /*const onSubmit = () => dispatch(saveForm(formName, apiUrl, fields));
  const onCaptchaSubmit = () => dispatch(formSubmitCaptcha(formName, apiUrl, fields));

  const onChange = (event) => {
     dispatch(setFormFields(formName, {[event.target.name]: event.target.value}));
  }

  const onRecaptcha = (value) => {
    dispatch(setFormFields(formName, {captcha: value}));
    dispatch(errorFlag('captcha', value === null))
  }*/

  const myForm = useForm({
    resolver: (formYupResolver),
    mode: 'onBlur',
    reValidateMode: 'onBlur'
  })

  // Use effect is called whenever the component renders, and there is a change in the dependencies
  useEffect(() => {
    // If this form is being submitted (and hasn't been submitted before) and there are errors then flag an error.
    if (myForm.formState.isSubmitting && !myForm.formState.submitCount && !isEmptyObject(myForm.formState.errors)) {
      dispatch(clearUnstickyAlerts()) // Clear any alerts that are not sticky alerts
      dispatch(setAlert('Unable to submit form', 'Please ensure all of the fields are completed and no errors are shown below.', ALERT_DANGER))
    }

  }, [dispatch, myForm.formState.isSubmitting, myForm.formState.submitCount, !isEmptyObject(myForm.formState.errors)])

  return myForm
}

export default useFormBuilder