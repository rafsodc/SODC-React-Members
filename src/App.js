import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './ReactUI/Layout/Layout';

import RenderRoutes from "./containers/Routes/Routes"
import routes from "./containers/Routes/RouteDefs";
import Authenticator from "./containers/Authentication/Authenticator";

import {library} from '@fortawesome/fontawesome-svg-core';
import {faCaretDown, faCheck} from '@fortawesome/free-solid-svg-icons'

library.add(faCaretDown, faCheck);

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Authenticator> */}
        {/* Render the content using routes to determine components */}
        <RenderRoutes routes={routes} handle404={true}/>
        {/* </Authenticator> */}
      </Layout>
    </div>
  );
}

export default App;
