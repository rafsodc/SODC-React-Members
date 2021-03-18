import React, {useEffect, useLayoutEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Login from "../Login/Login";
import {userRefreshToken} from "../../store/actions/";
import axios from "../../services/axios/axios";

const Authenticator = (props) => {

  const user = useSelector(state => state.userReducer)
  const form = useSelector(state => state.formsReducer.login)
  const dispatch = useDispatch();

  // useLayoutEffect runs synchronously, which allows axios to be updated.
  useLayoutEffect(() => {
    if (user.authenticated) {
      axios.interceptors.request.use(
        config => {
          config.headers.authorization = "BEARER " + user.token;

          return config;
        },
          error => Promise.reject(error)
      );
    } else {
      dispatch(userRefreshToken());
    }
  }, [dispatch, user.authenticated, user.token])

  return user.authenticated ? props.children : (form.hidden ? "" : <Login />);
}

export default Authenticator;