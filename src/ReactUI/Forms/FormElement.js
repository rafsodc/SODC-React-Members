import React from 'react';
import {Form} from "react-bootstrap";
import Aux from "../../hoc/Aux";
import FormSelectOptions from "./FormSelectOptions";


const FormElement = React.forwardRef((props, ref) => {
  let control;

  switch(props.type) {
    case 'select':
      control = <Form.Control as="select" disabled={props.disabled} onChange={props.onChange} name={props.name} ref={ref}
                                    placeholder={props.placeholder}
                                    className={props.errors[props.name] && "form-warning-el"}
                                    value={props.data[props.name]}><FormSelectOptions options={props.options}/></Form.Control>
      break;
    default:
      control = <Form.Control disabled={props.disabled} onChange={props.onChange} name={props.name} ref={ref} type={props.type}
                                    placeholder={props.placeholder}
                                    className={props.errors[props.name] && "form-warning-el"}
                                    value={props.data[props.name]} />
  }

   return <Aux>
      <Form.Label>{props.label}</Form.Label>
     {control}
      <Form.Text muted className={"form-warning-desc"}>{props.errors[props.name]?.message}</Form.Text>
    </Aux>
  }
);



export default FormElement;
