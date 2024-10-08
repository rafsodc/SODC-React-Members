import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form, Tab, Tabs } from 'react-bootstrap'
import Ticket from '../Ticket/Ticket'
import { addTicket, setAccordion, setTab } from '../../store/actions'
import TicketList from '../Ticket/TicketList'
import { loadEventTickets, loadUserTickets } from '../../store/actions/ticket'
import Transaction from '../Transaction/Transaction'
import Basket from '../Transaction/Basket'
import Payment from '../Transaction/Payment'
import { setResponse } from '../../store/actions/basket'
import IPGResponse from '../Transaction/IPGResponse'
import {useParams} from 'react-router'

const Booking = (props) => {

  const dispatch = useDispatch()
  const bookingState = useSelector(state => state.bookingReducer)
  const tickets = useSelector(state => state.ticketReducer)
  const transactionState = useSelector(state => state.transactionReducer)
  const {status} = useParams()

  const handleAddTicket = () => {
    if (props.user !== null) {
      const accordion = tickets.form.length + 1
      dispatch([
        addTicket(),
        setAccordion('ticket', accordion)
      ])
    }
  }

  const handleTabSelect = (key) => dispatch(setTab(key))

  const handleReturnToTickets = () => {
    dispatch([
      loadUserTickets(bookingState.owner, props.event),
      setTab('tickets')
    ])
  }

  // Handle message received from IPG frame
  const messageHandler = (event) => {
    dispatch([
      setResponse(event.data.elementArr),
      dispatch(setTab('confirmation'))
    ])
  }

  const handleHeaderClick = (tab, key) => {
    const setKey = (key === bookingState.accordion[tab]) ? -1 : key
    dispatch(setAccordion(tab, setKey))
  }

  useEffect(() => {
    if(bookingState.owner) {
      dispatch(loadUserTickets(bookingState.owner, props.event))
    }
    //dispatch(loadTransactions(props.event, bookingState.owner))
    
    // Determine status is set.  If so, display the confirmation tab.
    if (status !== undefined) handleTabSelect('confirmation')

  }, [dispatch, bookingState.owner, props.event, status])
  
  const transformedTicketForms = Object.entries(tickets.form).map((ticket, key) => {
    return <Ticket
      ticket={ticket[1]}
      settings={tickets.settings[ticket[0]]}
      key={key}
      ticketKey={(key + 1)}
      handleHeaderClick={() => handleHeaderClick('ticket', key + 1)}
      ticketOptions={props.ticketOptions}
      owner={bookingState.owner}
      event={props.event}
    />
  })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, [])

  const transformedTransactions = transactionState.map((transaction, key) => {
    return <Transaction
      transaction={transaction}
      key={key}
      transactionKey={(key + 1)}
      handleHeaderClick={() => handleHeaderClick('transaction', key + 1)}
    />
  })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, [])

  // Only load basket when the order tab is displayed (prevents excessive POST requests)
  const basket = (bookingState.tab === 'order') ? <Basket owner={bookingState.owner} event={props.event}/> : ''
  const payment = (bookingState.tab === 'payment') ? <Payment messageHandler={messageHandler}/> : ''
  const confirmation = (bookingState.tab === 'confirmation') ? <IPGResponse/> : ''

  const order_disabled = !['order', 'payment'].includes(bookingState.tab)

  // Determine if any tickets are not saved
  const isSaved = Object.entries(tickets.settings).filter(ticket => !ticket[1].isSaved).length === 0
  const notSavedNotice = isSaved ? '' : <Form.Text muted className={'form-warning-desc'}>Please ensure all tickets are
    saved to continue.</Form.Text>



  return (
    <Tabs activeKey={bookingState.tab} onSelect={(key) => handleTabSelect(key)}>
      <Tab eventKey="tickets" title={'Tickets'}><br/>
        <p>Below are the tickets you have requested for this event. Ticket details can be edited up until booking
          closes. Unpaid tickets can be cancelled; however it is not possible to cancel paid tickets via the website.
          Please email <a href="mailto:admin@sodc.net">admin@sodc.net</a> to cancel paid tickets.</p>
        <p>To view or edit ticket details, please click on a heading.</p>
        <TicketList activeKey={bookingState.accordion.ticket} handleAddTicket={handleAddTicket}>
          {transformedTicketForms}
        </TicketList>
        <br/>
        <Button disabled={!isSaved} onClick={() => handleTabSelect('order')}>Proceed to Order Confirmation</Button>
        {notSavedNotice}
      </Tab>
      <Tab eventKey="order" title={'Order'} disabled={order_disabled}>
        {/* <TransactionList activeKey={bookingState.accordion.transaction} >
          {transformedTransactions}
        </TransactionList> */}
        {basket}
        <Button onClick={() => handleTabSelect('payment')}>Proceed to Payment</Button>
      </Tab>
      <Tab eventKey="payment" title={'Payment'} disabled={true}>
        {payment}
      </Tab>
      <Tab eventKey="confirmation" title={'Confirmation'} disabled={true}>
        {confirmation}
        <Button onClick={() => handleReturnToTickets()}>Return to Tickets</Button>
      </Tab>
    </Tabs>
  )

}

export default Booking