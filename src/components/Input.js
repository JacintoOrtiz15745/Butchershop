import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {text} from '../utils/Constants';
import {styles} from '../styles/InputStyles';

const Input = props => {
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
      <Text style={styles.textMail}>{inputLabel}</Text>
      <TextInput
        value={value}
        onChangeText={text => handleChange(formValues, setFormValues, text)}
        style={styles.inputStyle}
        placeholder={placeholder}
        secureTextEntry={placeholder === text.Password ? true : false}
      />
    </View>
  );
};

export default Input;
