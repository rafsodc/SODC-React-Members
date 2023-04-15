import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducers/index'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
import axios from './services/axios/axios'
import ErrorBoundary from './containers/Errors/ErrorBoundary'

const store = createStore(reducer, applyMiddleware(thunk, multi))

axios.interceptors.response.use(null, error => {
  //rollbar.error(error);
  //this.props.raiseAlert(error);
  return Promise.reject(error)
})

ReactDOM.render(
  <Provider store={store}>
    {/*<React.StrictMode>*/}
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
    {/*</React.StrictMode>*/}
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
