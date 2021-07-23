import React, {useEffect, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {} from "../../store/actions";
import { getBasket, setResponse } from "../../store/actions/basket";
import Aux from "../../hoc/Aux"

const IPG = (props) => {

  useEffect(() => {
    window.addEventListener('message', props.receiveMessage, false);
    
    // cleanup this component
    return () => {
      window.removeEventListener('message', props.receiveMessage, false);
    };
  }, [props.receiveMessage])

   const fields = Object.keys(props.ipg).map( (key, index) => {
     if(props.ipg[key] !== "action") {
      return <input type="hidden" name={key} key={index} value={props.ipg[key]} /> 
     }
   });


  return (
    <Aux>
      <form method="post" target="ipgFrame" action={props.ipg.action}>
        {fields}
        <input type="submit" value="Submit" />

      </form>

      <iframe name="ipgFrame" id="ipgFrame" title="ipgFrame" width="460px" height="900px" > </iframe>
     </Aux> 
)
  }

export default IPG;