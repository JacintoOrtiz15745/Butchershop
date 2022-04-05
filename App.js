import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigations from './src/navigations/Navigations';     
import AuthLogin from './src/navigations/AuthLogin';
import { connect } from 'react-redux';

const App = ({Auth}) => {  
  return (
    <NavigationContainer>
      {!Auth.isLoggedIn ? <Navigations/> : <AuthLogin/>} 
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    Auth: state.LoginReducer
  }
}

export default connect(mapStateToProps, null)(App) 