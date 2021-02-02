import React from 'react';
import {Alert} from "react-bootstrap";

const AlertBox = (props) => {

  const handleClose = props.handleClose.bind(null, props.index);

  return (
    <Alert variant={props.alert.variant} onClose={handleClose} dismissible={props.alert.dismissible}>
      <Alert.Heading>{props.alert.heading}</Alert.Heading>
      <p>
        {props.alert.message}
      </p>
    </Alert>
  );
}


export default AlertBox;