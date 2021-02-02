import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './UI/Layout/Layout';

import RenderRoutes from "./containers/Routes/Routes"
import routes from "./containers/Routes/RouteDefs";


function App() {
  return (
    <div className="App">
      <Layout>
        {/* Render the content using routes to determine components */}
        <RenderRoutes routes={routes} handle404={true}/>
      </Layout>
    </div>
  );
}

export default App;
