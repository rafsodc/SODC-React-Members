import React, {useEffect} from "react";
import {Badge} from "react-bootstrap";

const ErrorBadge = (props) => {
  return props.errors ? <Badge variant={"danger"}>Incomplete</Badge> : "";
}

export default ErrorBadge;