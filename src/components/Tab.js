import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {text} from '../utils/Constants';
import {styles} from '../styles/TabStyles';

const HomeIcon = require('../utils/images/HomeIcon.png');

const Tab = () => {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity>
        <Image style={styles.iconTab} source={HomeIcon} />
      </TouchableOpacity>
      <Text>{text.Home}</Text>
    </View>
  );
};

export default Tab;
