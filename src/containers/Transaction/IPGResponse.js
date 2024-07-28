import React from 'react'
import { useSelector } from 'react-redux'
import Aux from '../../hoc/Aux'
import Loading from '../../components/Loading/Loading'
import {useParams} from 'react-router'

const IPGResponse = () => {

  const basketState = useSelector(state => state.basketReducer)
  const {status} = useParams()

  const response = (status === "null") ? <Loading/> :
    (status === 'success') ? <h4>Transaction Complete!</h4>:
      <Aux><h4>Transaction Failed: </h4>
      <p>Please try again, or contact the secretary</p></Aux>
    
  return (
    <Aux>
      <br/>
      {response}
    </Aux>
  )
}

export default IPGResponse
