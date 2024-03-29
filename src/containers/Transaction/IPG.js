import React, { useEffect } from 'react'
import Aux from '../../hoc/Aux'

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

  return (
    <Aux>
      <form method="post" target="ipgFrame" action={props.ipg.action}>
        {fields}
        <input type="submit" className="btn btn-primary" value="Click here to pay using Credit or Debit Card"/>

      </form>
      <br/>

      <iframe name="ipgFrame" id="ipgFrame" title="ipgFrame" width="460px" height="900px"
              style={{ border: '0px' }}></iframe>
    </Aux>
  )
}

export default IPG