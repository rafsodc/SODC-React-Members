import React from "react";
import {useSelector} from "react-redux";
import {Redirect} from "react-router";

const Landing = () => {
  const user = useSelector(state => state.user)
  if(!user.authenticated) {
    return <Redirect to={"/login"} />
  }
  return <p>Landing Page</p>
}

export default Landing;