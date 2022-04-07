import {SET_FETCH_DATA} from '../types';
import {text} from '../../utils/Constants';

export const homeState = data => {
  return {
    type: SET_FETCH_DATA,
    payload: data,
  };
};

export const fetchHomeDataFunction = tokenToFetch => { 
  return dispatch => {
    fetch(text.UrlApiImages, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${tokenToFetch}`,
      },
    })
      .then(response => response.text())
      .then(response => {
        return response;
      })
      .then(response => {
        const responseToJson = JSON.parse(response);
        dispatch(homeState(responseToJson)); 
      });
  };
};
