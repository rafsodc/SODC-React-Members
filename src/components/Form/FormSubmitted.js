import React from 'react'
import '../../assets/css/FormSaved.css'

const FormSubmitted = (props) => {
  return props.saved ? <p>Form successfully submitted.</p> : props.children
}

export default FormSubmitted