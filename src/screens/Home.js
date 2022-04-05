import React, {useState, useEffect} from 'react';
import {
  View, 
  StatusBar,
  FlatList, 
} from 'react-native';
import {text, colors} from '../utils/Constants';
import RenderApiInfo from '../components/RenderApiInfo';
import {styles} from '../styles/HomeStyles';
import Header from '../components/Header';
import Tab from '../components/Tab';
import { connect } from 'react-redux';

const Home = ({token}) => { 

  const [apiResponse, setApiResponse] = useState([]);

  const fecthApiImages = () => {
    fetch(text.UrlApiImages, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${token.token}`,
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
      <StatusBar backgroundColor={colors.white} barStyle={text.DarkContent} />
      <Header/>
      <FlatList
        data={apiResponse}
        keyExtractor={apiResponse.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <RenderApiInfo
            title={item.title}
            description={item.description}
            imageUrlProp={item.image}/>
        )}
      />
      <Tab/>
    </View>
  );
};

const mapStateToProps = (state) => {
  return { 
    token: state.LoginReducer
  }
}

export default connect(mapStateToProps, null)(Home)
