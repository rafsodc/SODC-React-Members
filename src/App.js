import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './ReactUI/Layout/Layout';
import {useSelector} from "react-redux";

import RenderRoutes from "./containers/Routes/Routes"
import routes from "./containers/Routes/RouteDefs";
import Authenticator from "./containers/Authentication/Authenticator";

import {library} from '@fortawesome/fontawesome-svg-core';
import {faCaretDown, faCheck} from '@fortawesome/free-solid-svg-icons'

import {stringFormat} from './services/prototypes/stringFormat';

if (!String.prototype.format) {
  String.prototype.format = stringFormat
}

library.add(faCaretDown, faCheck);

//function App() {
const App = () => {

  const user = useSelector(state => state.authenticationReducer.token_data);
  
  return (<div className="App">
      <Layout user={user}>
        {/* <Authenticator> */}
        {/* Render the content using routes to determine components */}
        <RenderRoutes routes={routes} handle404={true} user={user}/>
        {/* </Authenticator> */}
      </Layout>
    </div>
  );
}

export default App;
