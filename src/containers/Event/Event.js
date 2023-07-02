import React, {memo, useMemo} from 'react';
import {longDate} from '../../utils/formats/date';
import {Accordion, Card} from 'react-bootstrap';
import BookingBadge from './BookingBadge';
import {NavLink} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import EventTickets from './EventTickets';

const Event = (props) => {
    const {
        id,
        title,
        isBookingOpen,
        showTickets,
        eventKey,
        bookingOpen,
        bookingClose,
        description,
        date,
        venue,
        principalSpeaker,
        sponsor
    } = props;

    const formattedBookingOpenDate = useMemo(
        () => longDate.format(bookingOpen),
        [bookingOpen]
    );
    const formattedBookingCloseDate = useMemo(
        () => longDate.format(bookingClose),
        [bookingClose]
    );

    return (
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey={eventKey}>
                {title} - {longDate.format(date)}
                <BookingBadge show={isBookingOpen}/>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={eventKey}>
                <Card.Body>
                    <Card.Subtitle>Venue: {venue}</Card.Subtitle>
                    <Card.Text as="div">
                        <br/>
                        Booking Opens: {formattedBookingOpenDate}
                        <br/>
                        Booking Closes: {formattedBookingCloseDate}
                        <br/>
                        Principal Speaker: {principalSpeaker}
                        <br/>
                        Sponsor: {sponsor}
                        <br/>
                        <br/>
                        <ReactMarkdown source={description}/>
                        <br/>
                        {isBookingOpen && (
                            <>
                                <NavLink to={`/events/${id}`}>Click to book</NavLink>
                                <br/>
                            </>
                        )}
                        <strong>My Tickets</strong>
                    </Card.Text>
                    {showTickets && <EventTickets eventId={`/events/${id}`}/>}
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
};

export default memo(Event);
