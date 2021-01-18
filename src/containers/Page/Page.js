import React, {useEffect} from 'react';
import axios from 'axios';
import Loading from '../../UI/Loading/Loading';
import ReactMarkdown from "react-markdown";
import {useDispatch, useSelector} from "react-redux";
import * as actionTypes from "../../store/actions";
import withErrorBoundary from "../../helpers/ErrorBoundaries/withErrorBoundary";

/**
 * Page function returns Page container.  Content of the container is generated from an api GET request, using props.api passed via router.
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Page = (props) => {

  // Register dispatch as a function to pass data back to the state through the reducer
  const dispatch = useDispatch();
  // Get page data from state
  const page = useSelector(state => state.page);

  // React Hook that runs on render.  The use of dependencies prevents re-running if dependencies don't change.
  useEffect( () => {
    // Server query based on api URL provided in props
    axios.get(props.api)
      .then((response) => {
        // If we get a valid response
        dispatch({
          type: actionTypes.PAGE_LOAD,
          response: response
        });
      })
      .catch((error) => {
        // If we get an error, raise the error flag in the state
        dispatch({
          type: actionTypes.ERROR_FLAG,
          flag: 'Page',
          value: true
        })
      }
    );

    // cleanup is done on component unmount
    const cleanup = () => {
      dispatch({type: actionTypes.PAGE_UNLOAD});
    };
    return cleanup;

  }, [props.api, dispatch]);

  // If the state is loading, show the loading screen
  if(page.loading) {
    return (<Loading/>);
  }

  // Otherwise render content
  return (
    <ReactMarkdown source={page.response.data.contentMd}/>
  );

}

// Wrap the Page in the withErrorBoundary component.
export default withErrorBoundary(Page);