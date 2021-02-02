import React from 'react';
import {Form} from "react-bootstrap";
import Aux from "../../helpers/hoc/Aux";


const FormElement = React.forwardRef((props, ref) => (
    <Aux>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control onChange={props.onChange} name={props.name} ref={ref}
                    className={props.errors[props.name] && "form-warning-el"} value={props.data[props.name]}/>
      <Form.Text muted className={"form-warning-desc"}>{props.errors[props.name]?.message}</Form.Text>
    </Aux>
  )
);


export default FormElement;
