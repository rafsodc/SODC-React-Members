import axios from './../../services/axios/axios';
import actionTypes from '../actionTypes';

export const loadPage = (apiUrl) => dispatch => {
    axios.get(apiUrl)
    .then((response) => {
        // If we get a valid response
        dispatch({
          type: actionTypes.page.SET_CONTENT,
          data: response.data.content
        });
      })
    .catch(error => {})
    .finally(() => {
        dispatch({
          type: actionTypes.page.SET_LOAD,
          data: false
        });
    })
}

export const clearPage = () => ({
  type: actionTypes.page.CLEAR
});