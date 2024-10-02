import React from 'react'
import { Badge } from 'react-bootstrap'

const CancelledBadge = (props) => {
  return props.cancelled ? <Badge variant={'danger'}>Cancelled</Badge> : ''
}

export default CancelledBadge