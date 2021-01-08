import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

// Set default base URL for axios
axios.defaults.baseURL = 'https://localhost:8443';
// Set default header token
axios.defaults.headers.common['AUTHORIZATION'] = '';
// More options here: https://stackoverflow.com/questions/43051291/attach-authorization-header-for-all-axios-requests

axios.interceptors.request.use ();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
