import {StyleSheet} from 'react-native';
import {colors} from '../utils/Constants';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 90,
    paddingHorizontal: 23,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  myPhotosText: {
    fontSize: 28,
    fontWeight: '400',
    color: colors.grayMain,
  },
  logOutText: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.grayMain,
  },
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
