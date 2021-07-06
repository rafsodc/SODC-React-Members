import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {} from "../../store/actions";
import { getBasket } from "../../store/actions/basket";
import Aux from "../../hoc/Aux"

const IPG = (props) => {
  
  const fields = Object.keys(props.ipg).map( (key, index) => {
    return <input type="hidden" name={key} key={index} value={props.ipg[key]} /> 
  });

  console.log(props)

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