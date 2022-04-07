import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import HomeReducer from './HomeReducer';

const rootReducer = combineReducers({
  LoginReducer,
  HomeReducer,
});

export default rootReducer;
