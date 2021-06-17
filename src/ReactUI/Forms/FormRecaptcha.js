import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {Form} from "react-bootstrap";


const FormRecaptcha = (props) => (
  <Form.Group controlId="formCaptcha">
    <ReCAPTCHA className={props.error ? "form-warning-captcha" : null}
               sitekey="6LfJ4jwbAAAAABkOxONVVddw81bLQrqo5JCiBC5_"
               onChange={props.onRecaptcha}
    />
    <Form.Text muted className={"form-warning-desc"}>{props.error && "reCAPTCHA needs to be completed"}</Form.Text>
  </Form.Group>
)

export default FormRecaptcha;