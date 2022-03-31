import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from '../styles/RenderApiInfoStyles';

const RenderApiInfo = props => {
  const {title, description, imageUrlProp} = props;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: imageUrlProp,
          }}
        />
      </View>
      <View style={styles.titleAndInfoContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.infoText}>{description}</Text>
      </View>
    </View>
  );
};

export default RenderApiInfo;
