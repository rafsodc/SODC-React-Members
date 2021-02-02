import React from 'react';
import {Form} from "react-bootstrap";


const FormGroup = (props) => (
  <Form.Group controlId={props.controlId}>
    {props.children}
  </Form.Group>
);

export default FormGroup;
