import React from 'react'
import Loading from './Loading'
import Page404 from '../Page404/Page404'

const Load = React.memo((props) => (
  props.loading ? <Loading/> :
    props.notFound ? <Page404/> :
      props.children
))

export default Load