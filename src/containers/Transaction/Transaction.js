import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
import PaidBadge from '../Booking/PaidBadge'

const Transaction = (props) => {

  const action = props.transaction.ipg.action
  //console.log(props.transaction.ipg);
  const fields = Object.keys(props.transaction.ipg).map((key, index) => {
    return <input type="hidden" name={key} key={index} value={props.transaction.ipg[key]}/>
  })

  return <Card>
    <Card.Header onClick={props.handleHeaderClick}>
      Order {props.transaction.id} <PaidBadge paid={props.transaction.paid}/>
    </Card.Header>
    <Accordion.Collapse eventKey={props.transactionKey}>
      <Card.Body>
        {props.transaction.amount}

      </Card.Body>
    </Accordion.Collapse>
  </Card>
}

export default Transaction