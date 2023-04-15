import React from 'react'

import MediaQuery from 'react-responsive'
import Aux from '../../hoc/Aux'
import BannerDesktop from './BannerDesktop'
import BannerMobile from './BannerMobile'

const Banner = () => {
  return (
    <Aux>
      <MediaQuery minWidth={992}>
        <BannerDesktop/>
      </MediaQuery>
      <MediaQuery maxWidth={991}>
        <BannerMobile/>
      </MediaQuery>
    </Aux>)
}

export default Banner