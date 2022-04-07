import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {text} from '../utils/Constants';
import {styles} from '../styles/HaveAnAccountStyles';

const HaveAnAccount = props => {
  const {navigateTo} = props;
  return (
    <View style={styles.signUpContainer}>
      <Text style={styles.dontHaveAccountText}>{text.DontHaveAccount}</Text>
      <TouchableOpacity onPress={navigateTo}>
        <Text style={styles.signUpTextContainer}>{text.SignUp}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HaveAnAccount;
