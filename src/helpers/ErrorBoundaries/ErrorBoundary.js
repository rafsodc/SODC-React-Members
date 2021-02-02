import {Component} from "react";
import Rollbar from "rollbar";
import * as actionTypes from "../../store/actions";
import {connect} from "react-redux";
import config from "../../config/config";

/**
 * ErrorBoundary class that can either be used as a component or as a class that can be extended.
 * If used as a component, it is connected to react redux.
 */

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    // Define rollbar to allow rollbar.error to be called on error
    this.state = {
      rollbar: new Rollbar({
        accessToken: config.rollbar.accessToken,
        captureUncaught: false,
        captureUnhandledRejections: false,
        payload: {
          environment: config.rollbar.env,
        },
      })
    };
  }

  // Catch an uncaught errors below this ErrorHandler.
  componentDidCatch(error, errorInfo) {
    // If there was an error, log it to Rollbar

    this.state.rollbar.error(error);
    this.state.rollbar.log();
    this.props.raiseAlert(error);
  }

  // Default is to render props.  @Todo Render a different screen on error?
  render() {
    // Default render function - show children
    return this.props.children;
  }
}

/**
 * Map dispatch to class props
 */
const mapDispatchToProps = dispatch => {
  return {
    /**
     *
     * @param {Error} error
     * @returns {*}
     */
    raiseAlert: (error) => {
      const message = error.response ? error.message + " - " + error.response.data['hydra:description'] : error.message;
      dispatch({
        type: actionTypes.ALERT_OPEN,
        alert: {
          variant: 'danger',
          dismissible: false,
          heading: "An Error Has Occurred",
          message: "The following error has occurred: " + message
        },
        sticky: false,
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(ErrorBoundary);
export { ErrorBoundary, mapDispatchToProps };