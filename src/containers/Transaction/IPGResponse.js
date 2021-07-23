import React, {useEffect, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {} from "../../store/actions";
import { getBasket, setResponse } from "../../store/actions/basket";
import Aux from "../../hoc/Aux"

const IPGResponse = (props) => {
  console.log(props.response);
  return(
    <Aux>
      <strong>Transaction Complete:</strong>
    </Aux>
  )
};

export default IPGResponse;
