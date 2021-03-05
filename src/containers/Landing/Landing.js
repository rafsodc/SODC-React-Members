import React, {useEffect} from "react";
import EventList from "../Event/EventList";
import Aux from "../../hoc/Aux";
import axios from "../../services/axios/axios";

const Landing = () => {

  axios.get("/users/1").then(response => {
    console.log(response.data);
  })

  return(<Aux>
    <p>Landing Page - hello!</p>
    <EventList/>
  </Aux>);
}

export default Landing;