import React from 'react'
import { Badge } from 'react-bootstrap'

const PaidBadge = (props) => {
  return props.paid ? <Badge variant={'info'}>Paid</Badge> : <Badge variant={'warning'}>Not Paid</Badge>
}

export default PaidBadge