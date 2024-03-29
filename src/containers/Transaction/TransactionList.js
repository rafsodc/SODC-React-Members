import React from 'react'
import { Accordion } from 'react-bootstrap'
import Aux from '../../hoc/Aux'

const TransactionList = (props) => (
  <Aux><br/>
    <Accordion activeKey={props.activeKey}>
      {props.children}
    </Accordion>
  </Aux>
)

export default TransactionList