import React, {useEffect} from 'react';
import Loading from '../../ReactUI/Loading/Loading';
import ReactMarkdown from "react-markdown";
import {useDispatch, useSelector} from "react-redux";
import { loadPage } from '../../store/actions/page';
//import withErrorBoundary from "../../ReactHelpers/ErrorBoundaries/withErrorBoundary";

const Page = (props) => {

  // Register dispatch as a function to pass data back to the state through the reducer
  const dispatch = useDispatch();
  // Get page data from state
  const pageState = useSelector(state => state.pageReducer);

  // React Hook that runs on render.  The use of dependencies prevents re-running if dependencies don't change.
//   useEffect(() => {
//     // Server query based on api URL provided in props
//     http.get(props.apiUrl)
//     .then((response) => {
//       // If we get a valid response
//       dispatch({
//         type: actionTypes.PAGE_LOAD,
//         response: response
//       });
//     })
//     .catch(() => {
//         // If we get an error, raise the error flag in the state
//         dispatch({
//           type: actionTypes.ERROR_FLAG,
//           flag: 'Page',
//           value: true
//         });
//       }
//     ).finally(
//     dispatch({type: actionTypes.PAGE_LOAD_FINISH})
//   )



  useEffect(() => dispatch(loadPage(props.apiUrl)), [props.apiUrl, dispatch]);

  console.log(pageState);

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