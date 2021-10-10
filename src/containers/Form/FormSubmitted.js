import React from "react";
import {Alert} from "react-bootstrap";
import "../../resources/css/FormSaved.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const FormSubmitted = (props) => {
  return props.saved ? <p>Form successfully submitted.</p> : props.children
}

export default FormSubmitted;