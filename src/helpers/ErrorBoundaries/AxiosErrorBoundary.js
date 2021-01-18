import { ErrorBoundary, mapDispatchToProps } from "./ErrorBoundary";
import axios from "axios";
import { connect } from "react-redux";


class AxiosErrorBoundary extends ErrorBoundary {

  // Set axios interceptor on did mount.
  componentDidMount() {
    axios.interceptors.response.use(null, error => {
      this.state.rollbar.error(error);
      this.props.raiseAlert(error);
      return Promise.reject(error);
    })
  }

}

export default connect(null, mapDispatchToProps)(AxiosErrorBoundary);