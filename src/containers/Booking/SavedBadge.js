import React, {useEffect} from "react";
import {Badge} from "react-bootstrap";

const SavedBadge = (props) => {
  return props.saved ? <Badge variant={"success"}>Saved</Badge>: <Badge variant={"warning"}>Not Saved</Badge>;
}

export default SavedBadge;