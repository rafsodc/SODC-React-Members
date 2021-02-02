import React, {Children} from 'react';
import {Form} from "react-bootstrap";


const FormBuilder = (props) => (
  <Form {...props}>
    {props.children}
  </Form>
);
export default FormBuilder;
