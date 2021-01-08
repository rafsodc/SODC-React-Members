import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import Layout from './components/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import { RenderRoutes } from "./components/Routes/Routes"
import routes from "./components/Routes/Routes"
import {Helmet, HelmetProvider} from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="App">
          <Layout />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
