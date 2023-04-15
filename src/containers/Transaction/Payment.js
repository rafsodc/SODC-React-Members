import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTransaction } from '../../store/actions/basket'
import Aux from '../../hoc/Aux'
import Loading from '../../components/Loading/Loading'
import IPG from './IPG.js'

const Payment = (props) => {

  const dispatch = useDispatch()
  const basketState = useSelector(state => state.basketReducer)

  useEffect(() => {
    if (basketState.transaction === null) {
      dispatch(getTransaction({ basket: basketState.id }))
    }
  }, [dispatch, basketState.transaction])

  const ipg = (basketState.transaction === null) ? <Loading/> : <IPG ipg={basketState.transaction.ipg}
                                                                     messageHandler={props.messageHandler}/>

  return (
    <Aux><br/>
      <p>Payment will be taken using the Lloyds Cardnet Payment Gateway. Please click on the button below to
        continue.</p>
      {ipg}
    </Aux>
  )

}

export default Payment