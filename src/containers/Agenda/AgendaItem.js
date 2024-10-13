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
      <div className="speaker-info">
        <strong>{speaker.fullname}</strong> <em>({speaker.position})</em>
      </div>
  
      {/* Speaker content: photo and biography */}
      <div className="speaker-content">
        {speaker.photograph && speaker.photograph.contentUrl && (
          <img 
            src={speaker.photograph.contentUrl} 
            alt={`${speaker.fullname}'s photograph`} 
            className="speaker-photo"
          />
        )}
        <div className="speaker-bio">
          <ReactMarkdown source={speaker.biography} />
        </div>
      </div>
    </li>
  ));

  const speakerNames = props.agenda.speakers
    .map(speaker => `${speaker.fullname} (${speaker.position})`)
    .join(', ');

  const details = speakerNames || props.agenda.description;

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
        {details && (
          <FontAwesomeIcon 
            icon={faChevronDown} 
            className={`header-icon ${isOpen ? 'rotate' : ''}`} 
          />
        )}
      </Card.Header>
      
      {details && (
        <Accordion.Collapse eventKey={props.id}>
          <Card.Body>
          {props.agenda.description && (
            <ReactMarkdown source={props.agenda.description} />
          )}
          {speakerNames && (
            <>
            <h5>Speakers:</h5>
            <ol className="speaker-list">{speakers}</ol>
            </>
          )}
          </Card.Body>
        </Accordion.Collapse>
      )}
        
    </Card>
  );
}

export default AgendaItem;