import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadEvent} from "../../store/actions/event";
import Aux from "../../hoc/Aux";
import {useParams} from "react-router";
import Event from "../Event/Event";
import {Accordion} from "react-bootstrap";
import Ticket from "./Ticket";

const TicketSelector = (props) => {

  const dispatch = useDispatch();
  const eventState = useSelector(state => state.eventReducer);
  const { id } = useParams();


  //useEffect(() => dispatch(eventGet(`/events/${id}`)), [dispatch]);

  //return (

  //);
  <p>Hi</p>
};

export default TicketSelector;