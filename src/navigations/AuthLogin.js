import { View, Text, ActivityIndicator } from 'react-native'
import React, {useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginForm } from './Navigations';
import { Auth } from './Navigations';

const AuthLogin = ({navigation}) => { 
    useEffect(() => {
        AsyncStorage.getItem('token')
        .then(x => {
            navigation.navigate(x ? 'LoginForm' : 'Auth')
        })
    }, [])
  return (
    <View>
      <ActivityIndicator></ActivityIndicator>
    </View>
  )
}

export default AuthLogin