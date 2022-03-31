import {StyleSheet} from 'react-native';
import {colors} from '../utils/Constants';

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 76,
    borderTopWidth: 1,
    borderTopColor: colors.grayRender,
    backgroundColor: colors.white,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginHorizontal: 6,
  },
  titleAndInfoContainer: {
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 4,
    color: colors.grayMain,
  },
  infoText: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.grayLight,
  },
});
