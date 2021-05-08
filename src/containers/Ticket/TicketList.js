import React, {useEffect} from "react";
import {Accordion, Button} from "react-bootstrap";
import Aux from "../../hoc/Aux";

const TicketList = (props) => (
  <Aux>
    <Button onClick={props.handleAddTicket}>Add Ticket</Button>
    <br/> <br/>
    <Accordion activeKey={props.activeKey}>
      {props.children}
    </Accordion>

  </Aux>
  );

export default TicketList;