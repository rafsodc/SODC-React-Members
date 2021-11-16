
import React, {useEffect} from "react";
import {Accordion, Card} from "react-bootstrap";
import Aux from "../../hoc/Aux";
import {time} from "../../services/formats/date";

const AgendaItem = (props) => {

  const speakers = props.agenda.speakers.map((speaker, key) => <p key={key}>{speaker.fullname}</p>);

  // return <Aux><strong>Speakers: </strong>{speakers}</Aux>
  return <Card>
    <Card.Header onClick={props.handleHeaderClick}>{time.format(props.agenda.start)} - {props.agenda.title}</Card.Header>
    <Accordion.Collapse eventKey={props.id}>
      <Card.Body>
        <strong>Speakers: </strong>
        {speakers}
      </Card.Body>
    </Accordion.Collapse>
  </Card>;
}

export default AgendaItem;