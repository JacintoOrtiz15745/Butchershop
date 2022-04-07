import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../styles/HeaderStyles';
import {text} from '../utils/Constants';
import {connect} from 'react-redux';
import {logOutFunction} from '../redux/actions/LoginAction';

const Header = ({logOutFunction}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.myPhotosText}>{text.MyPhotos}</Text>
      <TouchableOpacity
        onPress={() => {
          logOutFunction();
        }}>
        <Text style={styles.logOutText}>{text.LOGOUT}</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapDispatchToProps = {
  logOutFunction,
};

export default connect(null, mapDispatchToProps)(Header);
