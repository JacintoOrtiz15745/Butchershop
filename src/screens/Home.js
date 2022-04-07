import React, {useEffect} from 'react';
import {View, StatusBar, FlatList} from 'react-native';
import {text, colors} from '../utils/Constants';
import RenderApiInfo from '../components/RenderApiInfo';
import {styles} from '../styles/HomeStyles';
import Header from '../components/Header';
import Tab from '../components/Tab';
import {connect} from 'react-redux';
import {fetchHomeDataFunction} from '../redux/actions/HomeActions';

const Home = ({token, fetchHomeDataFunction, data}) => {
  const tokenToFetch = token.token;

  useEffect(() => {
    fetchHomeDataFunction(tokenToFetch);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={colors.white} barStyle={text.DarkContent} />
      <Header />
      <FlatList
        data={data.dataFetchHome}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <RenderApiInfo
            title={item.title}
            description={item.description}
            imageUrlProp={item.image}
          />
        )}
      />
      <Tab />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    token: state.LoginReducer,
    data: state.HomeReducer,
  };
};

const mapDispatchToProps = {
  fetchHomeDataFunction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
