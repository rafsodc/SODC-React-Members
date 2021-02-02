import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./store/reducer";
import {BrowserRouter} from 'react-router-dom';
import {HelmetProvider} from "react-helmet-async";
import AxiosErrorBoundary from "./ReactHelpers/ErrorBoundaries/AxiosErrorBoundary";

// Set default base URL for axios
//axios.defaults.baseURL = 'https://localhost:8443';
// Set default header token
//axios.defaults.headers.common['AUTHORIZATION'] = '';
//axios.defaults.headers.common['Content-type'] = 'application/json';
// More options here: https://stackoverflow.com/questions/43051291/attach-authorization-header-for-all-axios-requests
//axios.interceptors.request.use ();

const store = createStore(reducer);


ReactDOM.render(
  <Provider store={store}>
    {/*<React.StrictMode>*/}
    <AxiosErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </HelmetProvider>
    </AxiosErrorBoundary>
    {/*</React.StrictMode>*/}
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
