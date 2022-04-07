import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from '../styles/LoginButtonStyles';
import {text} from '../utils/Constants';
import {connect} from 'react-redux';
import {logInFunction} from '../redux/actions/LoginAction';

const LogInButton = ({formValues, logInFunction}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        logInFunction(formValues);
      }}>
      <Text style={styles.buttonText}>{text.LOGIN}</Text>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = {
  logInFunction,
};

export default connect(null, mapDispatchToProps)(LogInButton);
