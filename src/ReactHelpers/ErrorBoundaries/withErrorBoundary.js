import React from "react";
import {ErrorBoundary, mapDispatchToProps as parentDispatch} from "./ErrorBoundary";
import * as actionTypes from "../../store/actions"
import {connect} from "react-redux";

/**
 * This function is used as a hoc to wrap a component on export.  This is also a class factory.
 */
const withErrorBoundary = (WrappedComponent) => {

  /**
   * Extend ErrorBoundary
   */
  const errorClass = class extends ErrorBoundary {

    // Clear any errors associated with wrapped component on unmount
    componentWillUnmount() {
      this.props.clearError(WrappedComponent.name);
    }

    render() {
      if (this.props.error[WrappedComponent.name]) {
        // If there was an error, present error message
        return <h1>Error</h1>;
      }
      // Otherwise return wrapped component
      return <WrappedComponent {...this.props}/>;
    }

  }

  // Map state to props
  const mapStateToProps = (state) => {
    return {
      error: state.error
    }
  }

  // Map dispatch to props
  const mapDispatchToProps = dispatch => {
    return {
      // Include mapDispatchToProps from ErrorHandler
      ...parentDispatch(),
      clearError: (flag) => dispatch({
        type: actionTypes.ERROR_FLAG,
        flag: flag,
        value: false,
      })
    }

  }

  return connect(mapStateToProps, mapDispatchToProps)(errorClass);

}

export default withErrorBoundary;