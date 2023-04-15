import React from 'react'
import { Helmet } from 'react-helmet-async'

/* Based on https://dev.to/luispa/how-to-add-a-dynamic-title-on-your-react-app----3l0j */

const TitleComponent = ({ title }) => {
  const defaultTitle = 'SODC'
  return (
    <Helmet>
      <title>{title ? title + ' | SODC' : defaultTitle}</title>
    </Helmet>
  )
}

export default TitleComponent