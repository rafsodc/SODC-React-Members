import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import AlertBox from "./AlertBox";
import * as actionTypes from "../../store/actions";

const AlertWindow = () => {

  const alerts = useSelector(state => state.alerts);
  const dispatch = useDispatch();

  const handleClose = (index) => {
    dispatch({
      type: actionTypes.ALERT_CLOSE,
      index: index,
    })
  }

  //alerts.map((alert, key) => console.log(key));

  return (
    alerts.map((alert, index) => (
      <AlertBox alert={alert} index={index} key={alert.key} handleClose={handleClose}/>
    ))
  );
}


export default AlertWindow;