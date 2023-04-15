import React from 'react'
import { Alert } from 'react-bootstrap'
import '../../assets/css/FormSaved.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FormSaved = (props) => {
  return props.saved ? <Alert key={'formSaved'} variant={'success'} className="formSaved">
    <FontAwesomeIcon icon={'check'}/> Form successfully saved</Alert> : ''
}

export default FormSaved