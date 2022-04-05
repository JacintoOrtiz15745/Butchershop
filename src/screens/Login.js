import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity, 
  KeyboardAvoidingView, 
} from 'react-native';
import {styles} from '../styles/LoginStyles';
import {text, colors} from '../utils/Constants'; 
import Title from '../components/Title';
import Input from '../components/Input'; 
import InputPassword from '../components/InputPassword';
import LogInButton from '../components/LogInButton';
import HaveAnAccount from '../components/HaveAnAccount';
import {handleEmailChange, handlePasswordChange} from '../utils/Functions/Functions';

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  return (
    <KeyboardAvoidingView style={styles.mainContainer}>
      <StatusBar backgroundColor={colors.white} barStyle={text.DarkContent} />
      <Title title ={text.Login} subtitle={text.Welcome}/> 
      <Input
        formValues={formValues}
        setFormValues={setFormValues}
        inputLabel={text.EMAIL}
        value={formValues.email}
        handleChange={handleEmailChange}
        placeholder={text.Email}
      />

      <InputPassword
        formValues={formValues}
        setFormValues={setFormValues}
        inputLabel={text.PASSWORD}
        value={formValues.password}
        handleChange={handlePasswordChange}
        placeholder={text.Password}
      />

      <TouchableOpacity>
        <Text style={styles.forgotText}>{text.ForgotPassword}</Text>
      </TouchableOpacity>

      <LogInButton
        formValues={formValues}
      />
 
      <HaveAnAccount/> 
    </KeyboardAvoidingView>
  );
};

export default Login;
