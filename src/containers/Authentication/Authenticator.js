import React, {useEffect, useLayoutEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Login from "../Login/Login";
import {refreshToken} from "../../store/actions/";
import axios from "../../services/axios/axios";
import {loadUser} from "../../store/actions/";

const Authenticator = (props) => {

  const auth = useSelector(state => state.authenticationReducer.auth)
  const form = useSelector(state => state.authenticationReducer.form)
  const dispatch = useDispatch();

  // useLayoutEffect runs synchronously, which allows axios to be updated.
  useLayoutEffect(() => {
    if (auth.authenticated) {
      axios.interceptors.request.use(
        config => {
          config.headers.authorization = "BEARER " + auth.token;
          return config;
        },
          error => Promise.reject(error)
      );
      dispatch(loadUser(auth.token_data.iri));
    } else {
      dispatch(refreshToken());
    }
  }, [dispatch, auth.authenticated, auth.token])

  return auth.authenticated ? props.children : (form.hidden ? "" : <Login />);
}

export default Authenticator;