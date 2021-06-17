import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, Tab, Tabs} from "react-bootstrap";
import Ticket from "../Ticket/Ticket";
import {addTicket, setAccordion, setTab} from "../../store/actions";
import TicketList from "../Ticket/TicketList";
import {loadTickets} from "../../store/actions/ticket";
import {} from "../../store/actions";
import {loadTransactions} from "../../store/actions/transaction";
import Transaction from "../Transaction/Transaction";
import TransactionList from "../Transaction/TransactionList";

const Booking = (props) => {

  const dispatch = useDispatch();
  const bookingState = useSelector(state => state.bookingReducer);
  const ticketState = useSelector(state => state.ticketReducer);
  const transactionState = useSelector(state => state.transactionReducer);

  useEffect(() => {
    dispatch(loadTickets(props.event, bookingState.owner));
    dispatch(loadTransactions(props.event, bookingState.owner))
  }, [dispatch]);

  const handleAddTicket = () => {
    if(props.user !== null) {
      const accordion = ticketState.length + 1
      dispatch([
        addTicket(),
        setAccordion(accordion)
      ]);
    }
  }

  const handleTicketNext = () => {
    dispatch(setTab("order"))
  }

  const handleHeaderClick = (key) => {
    const setKey = (key === bookingState.accordion) ? -1 : key;
    dispatch(setAccordion(setKey));
  }

  const transformedTicketForms = ticketState.map( (ticket, key) => {
    return <Ticket
      ticket={ticket}
      key={key}
      ticketKey={(key + 1)}
      handleHeaderClick={() => handleHeaderClick(key + 1)}
      ticketOptions={props.ticketOptions}
      owner={bookingState.owner}
      event={props.event}
    />;
  } )
  .reduce((arr, el) => {
    return arr.concat(el)
  }, []);

  const transformedTransactions = transactionState.map((transaction) => {
    return <Transaction
      transaction={transaction}
      />
  })
  .reduce((arr, el) => {
    return arr.concat(el)
  }, []);

  return (
    <Tabs activeKey={bookingState.tab}>
      <Tab eventKey="tickets" title={"Tickets"}><br/>
        <TicketList activeKey={bookingState.accordion} handleAddTicket={handleAddTicket}>
          {transformedTicketForms}
        </TicketList>
        <br/>
        <Button onClick={handleTicketNext}>Next</Button>
      </Tab>
      <Tab eventKey="order" title={"Order"}>
        <TransactionList>
          {transformedTransactions}
        </TransactionList>
      </Tab>
    </Tabs>
  );

};

export default Booking;