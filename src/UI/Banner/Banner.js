import React from "react";

const banner = React.memo(() => {
  return (
    <div className="container h-100">
      <div className="row h-100 align-items-center">
        <div className="col-lg-12">
          <h1 className="display-4 text-white mt-5 mb-2">Parent String | <strong>Short</strong></h1>
          <h2 className="text-white-50 mb-5">Long Title Here</h2>

        </div>
      </div>
    </div>
  )
});

export default banner;