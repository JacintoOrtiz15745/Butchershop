import {View, Text, Button, TouchableOpacity, TextInput, KeyboardAvoidingView, Image} from 'react-native';
import React from 'react';
import { styles } from '../styles/LoginStyles';
import {text} from '../utils/Constants'

const HidePassword = require('../utils/images/HidePassword.png')

const Login = ({navigation}) => {
  return ( 
    <KeyboardAvoidingView style={styles.mainContainer}>
        <Text style={styles.loginText}>{text.Login}</Text>
        <Text style={styles.welcomeText}>{text.Welcome}</Text>

        <Text style={styles.textMail}>{text.EMAIL}</Text>
        <TextInput style={styles.inputMail} placeholder='Email'/>

        <Text style={styles.textPassword}>{text.PASSWORD}</Text>
        <View style={styles.mainContainerPassword}> 
            <TextInput style={styles.inputPassword} placeholder='Password' secureTextEntry={true}/>
            <TouchableOpacity><Image style={styles.hidePassword} source={HidePassword}></Image></TouchableOpacity>
        </View>
        

        <TouchableOpacity><Text style={styles.forgotText}>{text.ForgotPassword}</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}><Text style={styles.buttonText}>{text.LOGIN}</Text></TouchableOpacity>
    
        <View style={styles.signUpContainer}>
            <Text style={styles.dontHaveAccountText}>{text.DontHaveAccount}</Text> 
            <TouchableOpacity><Text style={styles.signUpTextContainer}>{text.SignUp}</Text></TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
