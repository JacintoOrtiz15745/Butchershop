import {StyleSheet} from 'react-native';
import {colors} from '../utils/Constants';

export const styles = StyleSheet.create({
    
  signUpContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'flex-end',
    marginBottom: '10%',
  },
  dontHaveAccountText: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.grayMain,
  },
  signUpTextContainer: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.grayMain,
  },
});
