import React, {useEffect} from "react";
import {longDate} from "../../services/formats/date";
import {Card} from "react-bootstrap";
import BookingBadge from "./BookingBadge";
import {Accordion} from "react-bootstrap";

const Event = (props) => {
  return <Card>
    <Accordion.Toggle as={Card.Header} eventKey={props.eventKey}>{props.title} - {longDate.format(props.date)} <BookingBadge show={props.isBookingOpen}/></Accordion.Toggle>
    <Accordion.Collapse eventKey={props.eventKey}>
      <Card.Body>
        <Card.Subtitle>Venue: {props.venue}</Card.Subtitle>
        <Card.Text><br/>
          Booking Opens: {longDate.format(props.bookingOpen)}<br/>
          Booking Closes: {longDate.format(props.bookingClose)}<br/>
          Principal Speaker: {props.principalSpeaker}<br/>
          Sponsor: {props.sponsor}<br/><br/>
          <em>{props.description}</em><br/>
        </Card.Text>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
}

export default Event;