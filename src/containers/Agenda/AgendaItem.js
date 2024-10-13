import React, { useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { time } from '../../utils/formats/date';
import ReactMarkdown from 'react-markdown';
import '../../assets/css/Speaker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const AgendaItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    props.handleHeaderClick();
  };

  const speakers = props.agenda.speakers.map((speaker, key) => (
    <li key={key} className="speaker-item">
      <div className="speaker-content">
        <div className="speaker-info">
          {speaker.fullname} <em>({speaker.position})</em>
        </div>
        <div className="speaker-bio">
          <ReactMarkdown source={speaker.biography} />
        </div>
      </div>

      {speaker.photograph && speaker.photograph.contentUrl && (
        <img 
          src={speaker.photograph.contentUrl} 
          alt={`${speaker.fullname}'s photograph`} 
          className="speaker-photo"
        />
      )}
    </li>
  ));

  const speakerNames = props.agenda.speakers
    .map(speaker => `${speaker.fullname} (${speaker.position})`)
    .join(', ');

  return (
    <Card>
      <Card.Header onClick={toggleAccordion} className={`clickable-header ${props.agenda.break ? 'break-header' : ''}`}>
        <div className="header-content">
          {time.format(props.agenda.start)} - {props.agenda.title}
          <br />
          {speakerNames && (
            <>
              <small>Speakers: {speakerNames}</small>
            </>
          )}
        </div>
        {speakerNames && (
          <FontAwesomeIcon 
            icon={faChevronDown} 
            className={`header-icon ${isOpen ? 'rotate' : ''}`} 
          />
        )}
      </Card.Header>
      <Accordion.Collapse eventKey={props.id}>
        <Card.Body>
          <h5>Speakers:</h5>
          <ol className="speaker-list">{speakers}</ol>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

export default AgendaItem;