import React from "react";
import useFormBuilder from "../../hooks/Forms/useFormBuilder";
import {loginFormSchema} from "../../services/forms/schema";
import LoginForm from "./LoginForm";
import Aux from "../../hoc/Aux";
import {useDispatch, useSelector} from "react-redux";
import {alertCloseUnsticky, formUnlock, formLock, formClear, userLogin, alertOpen} from "../../store/actions/";
import {LOGIN} from "../../services/axios/paths";
import axios from '../../services/axios/axios';
import {ALERT_DANGER} from "../../ReactUI/AlertWindow/alertTypes";

const Login = (props) => {
  const alert = useSelector(state => state.alertReducer)
  const formName = 'login';
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    errors,
    onChange,
    onRecaptcha,
    data
  } = useFormBuilder(loginFormSchema, formName)

  const filterSticky = (arr, stickyArr) => {
    return arr.filter(el => (stickyArr.includes(el.key)));
  }

  const onSubmit = () => {
    dispatch(alertCloseUnsticky());
    dispatch(formLock(formName));
    axios.post(LOGIN, JSON.stringify(data.fields))
    .then((response) => {
      dispatch(userLogin(response.data.token));
      dispatch(formClear(formName));
    }).catch((error) => {
      switch(error.response.status) {
        case 401:
          dispatch(alertOpen("An error has occurred", error.response.data.message, ALERT_DANGER));
          break;
        default:
      }
    })
    .finally(() => {
      dispatch(formUnlock(formName))
    });
  }

  const childProps = {
    form: 'login',
    errors: errors,
    data: data.fields,
    onChange: onChange,
    ref: register
  }

  return <Aux>
    <h1>Login</h1>
    <LoginForm handleSubmit={handleSubmit} onSubmit={onSubmit} onRecaptcha={onRecaptcha} locked={data.locked}
               childProps={childProps} />
  </Aux>;

};

export default Login;