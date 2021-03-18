import React, {useEffect} from "react";
import {Badge} from "react-bootstrap";

const BookingBadge = (props) => {
  return props.show ? <Badge variant={"sodc"}>Booking Open</Badge> : "";
}

export default BookingBadge;