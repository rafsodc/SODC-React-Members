import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Accordion, Card } from 'react-bootstrap'
import Aux from '../../hoc/Aux'

const ContactSub = (props) => (
//
  <Aux>
    <p>Thank you for your message. We will be in contact with you as soon as possible.</p>

    <Accordion>
      <Card bg={'light'}>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          View submitted message <FontAwesomeIcon icon={'caret-down'}/>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>

            <p><strong>Name</strong>: {props.data.name}</p>
            <p><strong>Email</strong>: {props.data.email}</p>
            <p><strong>Subject</strong>: {props.data.subject}</p>
            <p><strong>Message:</strong></p>
            <p>{props.data.message}</p>


          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>

  </Aux>
)

export default ContactSub