import { Component } from 'react'
import { connect } from 'react-redux'
import { setAlert } from '../../store/actions'
import { ALERT_DANGER } from '../AlertWindow/alertTypes'
import rollbar from '../../utils/rollbar/rollbar'
import axios from '../../utils/axios/axios'

/**
 * ErrorBoundary class that can either be used as a component or as a class that can be extended.
 * If used as a component, it is connected to react redux.
 */

class ErrorBoundary extends Component {

  errorSelectors = [
    'error',
    'hydra:description',
    'message',
    'detail'
  ]

  // Set axios interceptor on did mount.
  componentDidMount () {
    axios.interceptors.response.use(null, error => {
      switch (error.response.status) {
        case 401:
          break
        case 404:
          rollbar.warning(error)
          this.props.alertOpen('Server Request Failed - ' + this.errorMessage(error))
          break
        default:
          rollbar.error(error)
          this.props.alertOpen('Server Request Failed - ' + this.errorMessage(error))
      }
      return Promise.reject(error)
    })
  }

  //getDerivedStateFromError(error){
  //  // @todo
  //};

  // Catch an uncaught errors below this ErrorHandler.
  componentDidCatch (error, errorInfo) {
    // If there was an error, log it to Rollbar
    rollbar.error(error)
    this.props.alertOpen(error.message)
  }

  // Default is to render props.  @Todo Render a different screen on error?
  render () {
    // Default render function - show children
    return this.props.children
  }

// We can receive multiple formats of error messages
  errorMessage = (error) => {
    const data = error.response.data
    let i = 0
    while (this.errorSelectors[i] !== undefined) {
      if (data[this.errorSelectors[i]] !== undefined) {
        return data[this.errorSelectors[i]]
      }
      i++
    }
    return 'Unknown error message format'
  }
}

/**
 * Map dispatch to class props
 */
const mapDispatchToProps = dispatch => {
  return {
    /**
     *
     * @param {string} message
     * @returns {*}
     */
    alertOpen: (message) => {
      dispatch(setAlert('An Error Has Occurred', message, ALERT_DANGER))
    },

  }
}

export default connect(null, mapDispatchToProps)(ErrorBoundary)
export { ErrorBoundary, mapDispatchToProps }