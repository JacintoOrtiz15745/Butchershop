import {StyleSheet} from 'react-native';
import {colors} from '../utils/Constants';

export const styles = StyleSheet.create({
  tabContainer: {
    width: '100%',
    height: 86,
    alignItems: 'center',
    paddingTop: 8,
    backgroundColor: colors.white,
  },
  iconTab: {
    width: 17,
    height: 20,
  },
  textTab: {
    fontSize: 10,
    fontWeight: '500',
  },
});
