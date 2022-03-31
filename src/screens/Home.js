import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {text} from '../utils/Constants';
import RenderApiInfo from '../components/RenderApiInfo';
import {styles} from '../styles/HomeStyles';

const HomeIcon = require('../utils/images/HomeIcon.png');

const Home = ({route}) => {
  const token = route.params;

  const [apiResponse, setApiResponse] = useState([]);

  const fecthApiImages = () => {
    fetch(text.UrlApiImages, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.text())
      .then(response => {
        return response;
      })
      .then(response => {
        const responseToJson = JSON.parse(response);
        setApiResponse(responseToJson);
      });
  };

  useEffect(() => {
    fecthApiImages();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.headerContainer}>
        <Text style={styles.myPhotosText}>{text.MyPhotos}</Text>
        <TouchableOpacity>
          <Text style={styles.logOutText}>{text.LOGOUT}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={apiResponse}
        keyExtractor={apiResponse.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <RenderApiInfo
            title={item.title}
            description={item.description}
            imageUrlProp={item.image}></RenderApiInfo>
        )}
      />
      <View style={styles.tabContainer}>
        <TouchableOpacity>
          <Image style={styles.iconTab} source={HomeIcon} />
        </TouchableOpacity>
        <Text>{text.Home}</Text>
      </View>
    </View>
  );
};

export default Home;
