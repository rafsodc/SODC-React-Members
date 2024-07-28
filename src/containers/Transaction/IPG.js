import React, { useEffect, useState } from 'react'
import Aux from '../../hoc/Aux'
import FormElement from '../../components/Form/FormElement'

const IPG = (props) => {

  useEffect(() => {
    window.addEventListener('message', props.messageHandler, false)

    // cleanup this component
    return () => {
      window.removeEventListener('message', props.messageHandler, false)
    }
  }, [props.receiveMessage])

  const fields = Object.keys(props.ipg).map((key, index) => {
    if (props.ipg[key] !== 'action') {
      return <input type="hidden" name={key} key={index} value={props.ipg[key]}/>
    }
  })

  const [cardNumber, setCardNumber] = useState('');

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\s+/g, '');
    const formattedValue = value.match(/.{1,4}/g)?.join(' ') || '';
    setCardNumber(formattedValue);
  };

  return (
    <Aux>
      <form method="post" action={props.ipg.action}>
        {fields}
        <div class="form-group">
                <label for="cardnumber" class="form-label">Card Number</label>
                <input type="text" id="cardnumber" name="cardnumber" maxlength="24" pattern="(?:\d{4} ?){3,6}\d{0,4}" class="form-control" placeholder="1234 5678 9012 3456" required value={cardNumber}
            onChange={handleCardNumberChange} />
                <small class="form-text">Enter your card number (12-24 digits).</small>
            </div>
            <div class="form-group">
                <label for="expmonth" class="form-label">Expiry Month</label>
                <input type="text" id="expmonth" name="expmonth" maxlength="2" pattern="\d{2}" class="form-control" placeholder="MM" required />
                <small class="form-text">Enter the expiry month (2 digits).</small>
            </div>
            <div class="form-group">
                <label for="expyear" class="form-label">Expiry Year</label>
                <input type="text" id="expyear" name="expyear" maxlength="4" pattern="\d{4}" class="form-control" placeholder="YYYY" required />
                <small class="form-text">Enter the expiry year (4 digits).</small>
            </div>
            <div class="form-group">
                <label for="cvm" class="form-label">Card Verification Value (CVV)</label>
                <input type="text" id="cvm" name="cvm" maxlength="4" pattern="\d{3,4}" class="form-control" placeholder="123" required />
                <small class="form-text">Enter the CVV (3 or 4 digits).</small>
            </div>
        <input type="submit" className="btn btn-primary" value="Click here to pay using Credit or Debit Card"/>
        
        

      </form>
      <br/>
{/* 
      <iframe name="ipgFrame" id="ipgFrame" title="ipgFrame" width="460px" height="900px"
              style={{ border: '0px' }}></iframe> */}

    </Aux>
  )
}

export default IPG