import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {eventsGet} from "../../store/actions/event";
import Aux from "../../hoc/Aux";

const EventList = () => {

  const dispatch = useDispatch();
  const event = useSelector(state => state.eventReducer);

  useEffect(() => dispatch(eventsGet()), [dispatch]);
  console.log(event);


  return (
    <p>Ok, I'm here</p>
  );

}

export default EventList;