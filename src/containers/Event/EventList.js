import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {eventsGet} from "../../store/actions/event";
import Aux from "../../hoc/Aux";
import Event from "./Event";
import {Accordion} from "react-bootstrap";

const EventList = () => {

  const dispatch = useDispatch();
  const eventState = useSelector(state => state.eventReducer);

  useEffect(() => dispatch(eventsGet()), [dispatch]);

  let transformedEvents = eventState.events.map( (event, key) => {
    return <Event key={key} eventKey={key.toString()} {...event} />;
  } )
  .reduce((arr, el) => {
    return arr.concat(el)
  }, [])

  if (eventState.loaded && transformedEvents.length === 0) {
    transformedEvents = <p>No future events scheduled.</p>;
  }

  return (
    <Aux>
      <Accordion defaultActiveKey="0">
      {transformedEvents}
      </Accordion>
    </Aux>
  );

};

export default EventList;