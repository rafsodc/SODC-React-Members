import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {Form} from "react-bootstrap";
import config from "../../config/config";


const FormRecaptcha = (props) => (
  <Form.Group controlId="formCaptcha">
    <ReCAPTCHA className={props.error ? "form-warning-captcha" : null}
               sitekey={config.captcha.sitekey}
               onChange={props.onRecaptcha}
    />
    <Form.Text muted className={"form-warning-desc"}>{props.error && "reCAPTCHA needs to be completed"}</Form.Text>
  </Form.Group>
)

export default FormRecaptcha;