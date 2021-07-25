import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {} from "../../store/actions";
import { getBasket } from "../../store/actions/basket";
import Aux from "../../hoc/Aux"
import {Button} from "react-bootstrap";
import Loading from "../../ReactUI/Loading/Loading"



const Basket = (props) => {

  const dispatch = useDispatch();
  const basketState = useSelector(state => state.basketReducer);

  useEffect(() => {
    dispatch(getBasket({event: props.event, owner: props.owner}));
  }, [dispatch]);

  const tickets = basketState.tickets.map((ticket, key) => {
      return <p key={key}><em>{ticket.ticketType.description} - &pound;{ticket.ticketType.price} - {ticket.lastname}, {ticket.firstname}</em></p>;
  });

  const content = (
    <Aux><br/>
    <p>Please review the items for purchase below.  Items that have already been purchased will not be shown.  If you believe you have already paid for an item, please email <a href="mailto:admin@sodc.net">admin@sodc.net</a>.</p>
    <p><strong>Tickets:</strong></p>
    {tickets}
    <br />
    <p><strong>Total Amount:</strong> &pound;{basketState.amount}</p>
    </Aux>
  );

  return basketState.loaded ? content : <Loading />

  

}

export default Basket;