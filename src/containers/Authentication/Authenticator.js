import React, {useEffect, useLayoutEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Login from "../Authentication/Login";
import {refreshToken} from "../../store/actions/";
import axios from "../../services/axios/axios";
import {loadUser} from "../../store/actions/";
import Page403 from "../../ReactUI/Page403/Page403";

const Authenticator = (props) => {

  const auth = useSelector(state => state.authenticationReducer)
  const form = useSelector(state => state.loginFormReducer)
  const dispatch = useDispatch();

  // useLayoutEffect runs synchronously, which allows axios to be updated.
  // @todo - Dynamically save the interceptor ID - For now we are using 0
  useLayoutEffect(() => {
    let tokenInterceptor;
    if (auth.authenticated) {
      tokenInterceptor = axios.interceptors.request.use(
        config => {
          config.headers.authorization = "BEARER " + auth.token;
          return config;
        },
          error => Promise.reject(error)
      );
      dispatch(loadUser(auth.token_data.iri));
    } else {
      tokenInterceptor = axios.interceptors.request.use(
        config => {
          //config.headers.authorization = null;
          return config;
        },
          error => Promise.reject(error)
      );
      dispatch(refreshToken());
    }

  }, [dispatch, auth.authenticated, auth.token])

if(props.access) {
  return props.children
}
else if (auth.authenticated) {
  return <Page403 />
}
else
  return form.hidden ? "" : <Login />;
}

export default Authenticator;