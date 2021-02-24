import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {Redirect} from "react-router";
import httpServices from "../../services/http/httpServices";

const Landing = () => {
  const user = useSelector(state => state.user)

  useEffect(() => {
    if(user.authenticated) {
      console.log(user);
      httpServices.user.get(user.iri).then(response => console.log(response));
    }
  })

  if(!user.authenticated) {
    return <Redirect to={"/login"} />
  }

  return <p>Landing Page</p>


}

export default Landing;