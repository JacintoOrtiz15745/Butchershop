import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Image,
  Alert,
} from 'react-native';
import {styles} from '../styles/LoginStyles';
import {text} from '../utils/Constants';
import useForm from '../hooks/useForm';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HidePassword = require('../utils/images/HidePassword.png');

const Login = ({navigation}) => {
  const initialState = {
    email: '',
    password: '',
  };

  const onSubmit = values => {
    fetch(text.UrlApi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    })
      .then(response => response.text())
      .then(response => {
        return JSON.parse(response);
      })
      .then(response => {
        AsyncStorage.setItem('token', response.token);
        const token = response.token;
        navigation.navigate('Home', token);
      })
      .catch(e =>
        Alert.alert('Error', 'Mail or password incorrect ' + e.error),
      );
  };

  const {suscribe, inputs, handleSubmit} = useForm(initialState, onSubmit);

  return (
    <KeyboardAvoidingView style={styles.mainContainer}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Text style={styles.loginText}>{text.Login}</Text>
      <Text style={styles.welcomeText}>{text.Welcome}</Text>

      <Text style={styles.textMail}>{text.EMAIL}</Text>
      <TextInput
        value={inputs.email}
        onChangeText={suscribe('email')}
        style={styles.inputMail}
        placeholder="Email"
      />

      <Text style={styles.textPassword}>{text.PASSWORD}</Text>
      <View style={styles.mainContainerPassword}>
        <TextInput
          value={inputs.password}
          onChangeText={suscribe('password')}
          style={styles.inputPassword}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity>
          <Image style={styles.hidePassword} source={HidePassword}></Image>
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotText}>{text.ForgotPassword}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>{text.LOGIN}</Text>
      </TouchableOpacity>

      <View style={styles.signUpContainer}>
        <Text style={styles.dontHaveAccountText}>{text.DontHaveAccount}</Text>
        <TouchableOpacity>
          <Text style={styles.signUpTextContainer}>{text.SignUp}</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
