import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {eventGet} from "../../store/actions/event";
import Aux from "../../hoc/Aux";
import Event from "./Event";

const EventPage = (props) => {

  const dispatch = useDispatch();
  const eventState = useSelector(state => state.eventReducer);

  useEffect(() => dispatch(eventGet(props.apiUrl)), [dispatch]);

  return (
    <Aux>
      <Event {...eventState.event} />
    </Aux>
  );

};

export default EventPage;