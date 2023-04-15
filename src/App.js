import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Layout from './components/Layout/Layout'
import { useSelector } from 'react-redux'

import RenderRoutes from './components/Routes/Routes'
import routes from './components/Routes/RouteDefs'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretDown, faCheck } from '@fortawesome/free-solid-svg-icons'

import { stringFormat } from './utils/prototypes/stringFormat'

if (!String.prototype.format) {
  String.prototype.format = stringFormat
}

library.add(faCaretDown, faCheck)

//function App() {
const App = () => {

  const user = useSelector(state => state.authenticationReducer.token_data)

  return (<div className="App">
      <Layout user={user}>
        {/* <Authenticator> */}
        {/* Render the content using routes to determine components */}
        <RenderRoutes routes={routes} handle404={true} user={user}/>
        {/* </Authenticator> */}
      </Layout>
    </div>
  )
}

export default App
