import {StyleSheet} from 'react-native';
import {colors} from '../utils/Constants';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.white,
  },  
  forgotText: {
    fontSize: 14,
    fontWeight: '400',
    paddingTop: 11,
    paddingBottom: 29,
    alignSelf: 'flex-end',
    color: colors.grayMain,
  },  
});
