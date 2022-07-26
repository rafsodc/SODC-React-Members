import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadEvents} from "../../store/actions/event";
import Aux from "../../hoc/Aux";
import Event from "./Event";
import {Accordion} from "react-bootstrap";
import Loading from "../../ReactUI/Loading/Loading";

const EventList = () => {

  const dispatch = useDispatch();
  const eventState = useSelector(state => state.eventReducer);

  useEffect(() => dispatch(loadEvents()), [dispatch]);

  let content = <Loading />

  if(eventState.events !== null) {
    let transformedEvents = eventState.events.map((event, key) => {
      return <Event key={key} eventKey={key.toString()} {...event} showTickets={true} />;
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, [])

    if (transformedEvents.length === 0) {
      transformedEvents = <p>No future events scheduled.</p>;
    }

    content =
      <Accordion defaultActiveKey="0">
        {transformedEvents}
      </Accordion>
  }

  return content;
};

export default EventList;