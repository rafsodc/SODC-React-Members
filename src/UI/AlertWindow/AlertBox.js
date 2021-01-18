import React from 'react';
import {Alert} from "react-bootstrap";

const AlertBox = (props) => {

  return (
    <Alert variant={props.alert.variant} onClose={() => props.closeAlert(props.index)} dismissible={props.alert.dismissible}>
      <Alert.Heading>{props.alert.heading}</Alert.Heading>
      <p>
        {props.alert.message}
      </p>
    </Alert>
  );
}


export default AlertBox;