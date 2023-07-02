import React from 'react'
import { Accordion, Button } from 'react-bootstrap'
import Aux from '../../../hoc/Aux'

const TicketTypeList = (props) => (
  <Aux>
    <Accordion activeKey={props.activeKey}>
      {props.children}
    </Accordion>
    <br/>
    <Button onClick={props.handleAddTicketType}>Add Ticket Type</Button>
    <br/>
  </Aux>
)

export default TicketTypeList