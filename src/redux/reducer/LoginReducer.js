import {initalState} from '../initialState/InitialState';
import {SET_LOGIN_STATE, SET_LOGOUT_STATE} from '../types';

function LoginReducer(state = initalState, action){
  switch (action.type) {
    case SET_LOGIN_STATE:
      return { 
        isLoggedIn: true,
        token: action.payload, 
      };
    case SET_LOGOUT_STATE:
      return { 
        isLoggedIn: false,
      };
    default:
      return state;
  }
}; 

export default LoginReducer;