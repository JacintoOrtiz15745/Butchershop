import React,{useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {text} from '../utils/Constants';
import {styles} from '../styles/InputPasswordStyles';

const HidePassword = require('../utils/images/HidePassword.png');

const InputPassword = (props) => {
    const [hidePassword, setHidePassword] = useState(false);

  const {
    formValues,
    setFormValues,
    inputLabel,
    value,
    handleChange,
    placeholder,
  } = props;

  return (
    <View>
      <Text style={styles.textPassword}>{inputLabel}</Text>
      <View style={styles.mainContainerPassword}>
        <TextInput
          value={value}
          onChangeText={(text) => handleChange(formValues, setFormValues, text)}
          style={styles.inputPassword}
          placeholder={placeholder}
          secureTextEntry={placeholder === text.Password ? true : false}
        />
        {placeholder === text.Password ? 
         <TouchableOpacity>
         <Image style={styles.hidePassword} source={HidePassword}></Image>
            </TouchableOpacity> : <View/>
        }
       
      </View>
    </View>
  );
};

export default InputPassword;
