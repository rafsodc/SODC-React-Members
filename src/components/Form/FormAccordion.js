import React from 'react'
import { Accordion, Button } from 'react-bootstrap'
import Aux from '../../hoc/Aux'

const FormAccordion = ( {activeKey, children, handleButton, buttonValue}  ) => (
  <Aux>
    <Accordion activeKey={activeKey}>
      {children}
    </Accordion>
    <br/>
    <Button onClick={handleButton}>{buttonValue}</Button>
    <br/>
  </Aux>
)

export default FormAccordion