import {SET_LOGIN_STATE, SET_LOGOUT_STATE} from '../types';
import {text} from '../../utils/Constants';
import {Alert} from 'react-native' 

export const logIn = (token) => {
  return {
    type: SET_LOGIN_STATE,
    payload: token,
  };
}

export const logInFunction = (formValues) => { 
 
  return async (dispatch) => {
    fetch(text.UrlApi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(formValues),
    })
      .then(response => response.text())
      .then(response => {
        return JSON.parse(response);
      })
      .then(response => { 
        const token = response.token;  
        dispatch(logIn(token))  
      })
      .catch(e => Alert.alert('Error', 'Email or Password incorrect', e.error))
  }
}

export const logOut = () => {
  return {
    type: SET_LOGOUT_STATE, 
  }
}

export const logOutFunction = () => {
  return (dispatch) => { 
    dispatch(logOut())
  }
}

