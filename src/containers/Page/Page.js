import React, {useEffect} from 'react';
import Loading from '../../ReactUI/Loading/Loading';
import ReactMarkdown from "react-markdown";
import {useDispatch, useSelector} from "react-redux";
import { clearPage, loadPage } from '../../store/actions/page';
//import withErrorBoundary from "../../ReactHelpers/ErrorBoundaries/withErrorBoundary";

const Page = (props) => {

  // Register dispatch as a function to pass data back to the state through the reducer
  const dispatch = useDispatch();
  // Get page data from state
  const pageState = useSelector(state => state.pageReducer);


  useEffect(() => {
    dispatch(loadPage(props.apiUrl))
    return dispatch(clearPage());
  }, [props.apiUrl, dispatch]);

  // If the state is loading, show the loading screen
  if (pageState.loading) {
    return (<Loading/>);
  }

  // Otherwise render content
  return (
    <ReactMarkdown source={pageState.content}/>
  );

}

// Wrap the Page in the withErrorBoundary component.
//export default withErrorBoundary(Page);
export default Page;