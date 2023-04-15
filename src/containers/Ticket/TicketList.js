import React from 'react'
import { Accordion, Button } from 'react-bootstrap'
import Aux from '../../hoc/Aux'

const TicketList = (props) => (
  <Aux>
    <Accordion activeKey={props.activeKey}>
      {props.children}
    </Accordion>
    <br/>
    <Button onClick={props.handleAddTicket}>Add Ticket</Button>
    <br/>
  </Aux>
)

export default TicketList