const authentication = {
  NAME: 'authentication',
  AUTHENTICATE:  'AUTHENTICATE',
  LOGOUT: 'LOGOUT',
  SET_USER: 'SET_USER',
}

const loginForm = {
  NAME: 'loginForm',
  SET_FIELD: 'SET_LOGIN_FIELD',
  SET_LOCKED: 'SET_LOGIN_LOCKED',
  SET_HIDDEN: 'SET_LOGIN_HIDDEN',
  CLEAR: 'CLEAR_LOGIN'
}

const passwordResetRequestForm = {
  NAME: 'passwordResetRequestForm',
  SET_FIELD: 'SET_PASSWORD_RESET_REQUEST_FIELD',
  SET_LOCKED: 'SET_PASSWORD_RESET_REQUEST_LOCKED',
  SET_HIDDEN: 'SET_PASSWORD_RESET_REQUEST_HIDDEN',
  CLEAR: 'CLEAR_PASSWORD_RESET_REQUEST'
}

const passwordResetSubmitForm = {
  NAME: 'passwordResetSubmitForm',
  SET_FIELD: 'SET_PASSWORD_RESET_SUBMIT_FIELD',
  SET_LOCKED: 'SET_PASSWORD_RESET_SUBMIT_LOCKED',
  SET_HIDDEN: 'SET_PASSWORD_RESET_SUBMIT_HIDDEN',
  CLEAR: 'CLEAR_PASSWORD_RESET_SUBMIT'
}

const passwordResetSubmit = {
  NAME: 'passwordResetSubmit',
  SET_LOADED: 'SET_PASSWORD_RESET_SUBMIT_LOADED',
  SET_VALID: 'SET_PASSWORD_RESET_SUBMIT_VALID'
}

export default {
  authentication: authentication,
  loginForm: loginForm,
  passwordResetRequestForm: passwordResetRequestForm,
  passwordResetSubmitForm: passwordResetSubmitForm,
  passwordResetSubmit: passwordResetSubmit
}