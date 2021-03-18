import React, {useEffect} from "react";
import EventList from "../Event/EventList";
import Aux from "../../hoc/Aux";

const Landing = () => {


  return(<Aux>
    <h2>SODC Members' Area</h2>
    <h3>Upcoming Events</h3>
    <EventList/>
  </Aux>);
}

export default Landing;