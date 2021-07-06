import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {} from "../../store/actions";
import { getBasket, getTransaction } from "../../store/actions/basket";
import Aux from "../../hoc/Aux"
import {Button} from "react-bootstrap";
import Loading from "../../ReactUI/Loading/Loading"
import IPG from "./IPG.js"


const Basket = (props) => {

  const dispatch = useDispatch();
  const basketState = useSelector(state => state.basketReducer);

  useEffect(() => {
    dispatch(getBasket({event: props.event, owner: props.owner}));
  }, [dispatch]);

  const handleIPGButton = () => {
    dispatch(getTransaction({basket: basketState.id}))
  }

  const tickets = basketState.tickets.map((ticket) => {
      return ticket;
  });

  console.log(basketState)

  const ipg = (basketState.transaction === null)? "" : <IPG ipg={basketState.transaction.ipg} />
  
  const content = (
    <Aux>
    <h4>Basket</h4>
    <p>Amount: &pound;{basketState.amount}</p>
    <p>Tickets: {tickets}</p>
    <Button onClick={handleIPGButton}>Proceed to Payment</Button>
    {ipg}
    </Aux>
  );

  return basketState.loaded ? content : <Loading />

  

}

export default Basket;