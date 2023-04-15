import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AlertBox from './AlertBox'
import { clearAlert } from '../../store/actions/'

const AlertWindow = () => {

  const alerts = useSelector(state => state.alertReducer.alerts)
  const dispatch = useDispatch()

  const handleClose = (index) => {
    dispatch(clearAlert(index))
  }

  return (
    alerts.map((alert, index) => (
      <AlertBox alert={alert} index={index} key={alert.key} handleClose={handleClose}/>
    ))
  )
}

export default AlertWindow