import React from 'react'
import { useSelector } from 'react-redux'
import Aux from '../../hoc/Aux'
import Loading from '../../ReactUI/Loading/Loading'

const IPGResponse = () => {

  const basketState = useSelector(state => state.basketReducer)

  const response = (basketState.response === null) ? <Loading/> :
    (basketState.response.status === 'FAILED') ? <Aux><h4>Transaction Failed: </h4>
        <p>{basketState.response.fail_reason}</p></Aux> :
      <h4>Transaction Complete!</h4>
  return (
    <Aux>
      <br/>
      {response}
    </Aux>
  )
}

export default IPGResponse
