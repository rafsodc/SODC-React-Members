import React from 'react'
import '../../resources/css/BannerMobile.css'
import FitText from 'react-fittext'

const BannerMobile = React.memo(() => {
  return (
    <div className="container h-100">
      <div className="row h-100 align-items-center">
        <div className="col-lg-12">
          <FitText>
            <h1 className="display-4 text-white mt-5 mb-2">Royal Air Force | <strong>SODC</strong></h1>
          </FitText>
          <FitText compressor={1.75}>
            <h2 className="text-white-50 mb-5">Signal Officers' Dinner Club</h2>
          </FitText>
        </div>
      </div>
    </div>
  )
})

export default BannerMobile