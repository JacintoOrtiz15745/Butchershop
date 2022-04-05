import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'; 
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const AuthLogin = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default AuthLogin;
