import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles/TitleStyles';

const Title = props => {
  const {title, subtitle} = props;
  return (
    <View>
      <Text style={styles.loginText}>{title}</Text>
      <Text style={styles.welcomeText}>{subtitle}</Text>
    </View>
  );
};

export default Title;
