import Rollbar from 'rollbar'
import config from '../../config/config'

const rollbar = new Rollbar({
  accessToken: config.rollbar.accessToken,
  captureUncaught: false,
  captureUnhandledRejections: false,
  payload: {
    environment: config.rollbar.env,
  },
})

export default rollbar