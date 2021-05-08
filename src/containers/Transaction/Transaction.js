import React from "react";
import {Accordion, Card} from "react-bootstrap";
import PaidBadge from "../Booking/PaidBadge";

const Transaction = (props) => {
  return <Card>
    <Card.Header onClick={props.handleHeaderClick}>
      Order {props.transaction.id} <PaidBadge paid={props.transaction.paid} />
    </Card.Header>
    <Accordion.Collapse eventKey={props.transaction.id}>
      <Card.Body>
        {props.transaction.amount}
      </Card.Body>
    </Accordion.Collapse>
  </Card>
}

export default Transaction;